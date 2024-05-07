import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrl: './exp-edu.component.css'
})
export class ExpEduComponent {

  constructor(private router: Router) { }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      // Navigate to the next page (about page) and set the transition flag
      setTimeout(() => {
      this.router.navigateByUrl('/contact');
      }, 500); // Adjust the delay as needed
    }  else if (event.deltaY < 0) {
      // Navigate to the previous page (home page)
      setTimeout(() => {
        this.router.navigateByUrl('/projects');
      }, 500); // Adjust the delay as needed
    }
  }
}

