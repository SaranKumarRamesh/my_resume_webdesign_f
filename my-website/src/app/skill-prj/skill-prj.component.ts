import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-prj',
  templateUrl: './skill-prj.component.html',
  styleUrl: './skill-prj.component.css'
})
export class SkillPrjComponent {

  constructor(private router: Router) { }

  // ngOnInit(): void {
  //   // Scroll to the top of the page
  //   window.scrollTo(0, 115);
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   // Get the height of the document, including any overflow content
  //   const documentHeight = document.documentElement.scrollHeight;

  //   // Get the height of the viewport
  //   const viewportHeight = window.innerHeight;

  //   // Get the current scroll position
  //   const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   console.log(scrollPosition);

  //   // Calculate the position at the end of the Home component
  //   const endOfHomePosition = documentHeight - viewportHeight;

  //   // Define a threshold (e.g., 90% of the Home component height)
  //   const downThreshold = 0.90 * endOfHomePosition;

  //   const upThreshold = 0.10 * endOfHomePosition;
  //   console.log(scrollPosition);


  //   if (scrollPosition >= downThreshold) {
  //     this.router.navigateByUrl('/experience');
  //   } else if (scrollPosition <= upThreshold) {
  //     this.router.navigateByUrl('/about'); // Navigate back to the About component
  //   }
  // }
}

