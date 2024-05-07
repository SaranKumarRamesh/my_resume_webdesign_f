import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-prj',
  templateUrl: './skill-prj.component.html',
  styleUrl: './skill-prj.component.css'
})
export class SkillPrjComponent {

  constructor(private router: Router) { }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (event.deltaY > 0) {
      // Navigate to the next page (about page) and set the transition flag
      setTimeout(() => {
      this.router.navigateByUrl('/experience');
      }, 500); // Adjust the delay as needed
    }  else if (event.deltaY < 0) {
      // Navigate to the previous page (home page)
      setTimeout(() => {
        this.router.navigateByUrl('/about');
      }, 500); // Adjust the delay as needed
    }
  }
}

