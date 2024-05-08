import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {

  formData: any = {}; // Object to store form data
  emailSent: boolean = false; // Track if email has been sent

  constructor(private router: Router, private http: HttpClient) { }

  submitForm(contactForm: any) {
    if (contactForm.valid) {
      // Form is valid, submit data or perform other actions
      const formData = {
        name: contactForm.value.name,
        email: contactForm.value.email,
        requirements: contactForm.value.requirements
      };

      this.http.post('http://localhost:3000/api/send-email', formData)
      .subscribe({
        next: () => {
          console.log('Email sent successfully');
          this.emailSent = true; // Set emailSent flag to true
          // Optionally, display a success message to the user
        },
        error: (error: HttpErrorResponse) => {
          if (error.status === 200) {
            console.log('Email sent successfully');
            this.emailSent = true; // Set emailSent flag to true
            // Optionally, display a success message to the user
          } else {
            console.error('Error sending email:', error.status, error.statusText);
            // Optionally, display an error message to the user
          }
        }
      });
    }
  }

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


