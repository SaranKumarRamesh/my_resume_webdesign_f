import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navigating: boolean = false; // Flag to track navigation state

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialize your JavaScript code here
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();

        // Add the "active" class to the clicked link
        link.classList.add('active');
      });
    });
  }

  // Debounce function for scroll events
  debounce(callback: Function, delay: number) {
    let timeout: any;
    return function(this: any, ...args: any[]) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback.apply(this, args);
      }, delay);
    };
  }

  // Debounce the onWheel function
  debouncedOnWheel = this.debounce((event: WheelEvent) => {
    if (!this.navigating && event.deltaY > 0) {
      // Prevent multiple navigations
      this.navigating = true;

      // Navigate to the next page (about page) after debounce and set the transition flag
      this.router.navigateByUrl('/about');

      // Reset navigation flag after a delay
      setTimeout(() => {
        this.navigating = false;
      }, 300);
    }
  }, 300);

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    this.debouncedOnWheel(event);
  }
}
