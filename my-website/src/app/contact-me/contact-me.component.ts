import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  constructor(private router: Router) { }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
     if (event.deltaY < 0) {
      // Navigate to the previous page (home page)
      setTimeout(() => {
        this.router.navigateByUrl('/experience');
      }, 500); // Adjust the delay as needed
    }
  }
}


