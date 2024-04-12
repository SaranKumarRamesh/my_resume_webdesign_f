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


  // the below on scroll function is working only if the screen is in inspect mode else itis not working

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    // Get the height of the document, including any overflow content
    const documentHeight = document.documentElement.scrollHeight;

    // Get the height of the viewport
    const viewportHeight = window.innerHeight;

    // Get the current scroll position
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log(scrollPosition);

    // Calculate the position at the end of the Home component
    const endOfHomePosition = documentHeight - viewportHeight;

    // Define a threshold (e.g., 90% of the Home component height)
    const threshold = 0.90 * endOfHomePosition;

    console.log(scrollPosition + " " + threshold);

    if (scrollPosition >= threshold) {
      this.router.navigateByUrl('/about');
    }
  }
}
