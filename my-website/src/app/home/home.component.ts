import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      // Navigate to the next page (about page) and set the transition flag
      console.log("True");
      setTimeout(() => {
      this.router.navigateByUrl('/about');
      }, 500); // Adjust the delay as needed
    }
  }
}
