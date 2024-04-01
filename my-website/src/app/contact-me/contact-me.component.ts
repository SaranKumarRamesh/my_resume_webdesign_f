import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  constructor(private router: Router) { }

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

    const upThreshold = 0.10 * endOfHomePosition;
    console.log(scrollPosition);

    if (scrollPosition <= upThreshold) {
      this.router.navigateByUrl('/experience'); // Navigate back to the About component
    }
  }
}


