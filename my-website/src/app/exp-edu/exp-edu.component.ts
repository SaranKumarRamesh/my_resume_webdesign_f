import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrl: './exp-edu.component.css'
})
export class ExpEduComponent {

  navigating: boolean = false; // Flag to track navigation state

  constructor(private router: Router) { }

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
      if (!this.navigating) {
        if (event.deltaY > 0) {
          // Navigate to the next page (about page) after debounce and set the transition flag
          this.navigating = true;
          this.router.navigateByUrl('/contact');
        } else if (event.deltaY < 0) {
          // Navigate to the previous page (home page) after debounce and set the transition flag
          this.navigating = true;
          this.router.navigateByUrl('/projects');
        }

        // Reset navigation flag after a delay
        setTimeout(() => {
          this.navigating = false;
        }, 300); // Adjust the delay as needed
      }

    }, 300); // Adjust the delay as needed

    @HostListener('window:wheel', ['$event'])
    onWheel(event: WheelEvent) {
      this.debouncedOnWheel(event);
    }
}

