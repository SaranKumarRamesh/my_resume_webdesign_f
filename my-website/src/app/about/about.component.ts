import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

   // Define boolean variables to track button clicks
   frontendClicked: boolean = false;
   backendClicked: boolean = false;
   devopsClicked: boolean = false;

   // Define content for each combination of button clicks
   mainContent: string = "As an experienced full-stack developer, I excel in frontend, backend, and DevOps domains. My comprehensive expertise ensures I deliver tailored, robust solutions meeting diverse project requirements. From crafting engaging user interfaces to optimizing backend performance and streamlining deployment processes, I bring a holistic approach to development projects, driving efficiency and innovation.";
   combinations: { [key: string]: string } = {
     '1': "With solid foundation in front-end technologies such as HTML, CSS, and JavaScript, I've effectively utilized AngularJS and ReactJS to craft dynamic web interfaces, delivering compelling user interactions. These frameworks enable me to create seamless, responsive designs that enhance user engagement and satisfaction. My expertise extends to implementing advanced features and optimizing performance to meet the demands of modern web applications.",
     '2': "Proficient in backend tech like Java and Node.js to develop efficient server-side solutions. I've managed databases such as MongoDB, MySQL, and SQL Server. Using the Spring Boot framework, I've crafted scalable applications, enhancing performance and security. This expertise allows me to design robust backend systems, meeting diverse projectrequirements, ensuring seamless functionality and high performance.",
     '3': "Proficient in DevOps methodologies, I leverage tools like Ansible, Docker, Kubernetes, and Git for streamlined automation and efficient deployment pipelines. With expertise in orchestrating containerized environments and managing version control systems, such as Git, I ensure seamless collaboration and continuous integration. My experience extends to configuring automation pipelines with Jenkins, optimizing workflows for rapid development cycles and robust deployment strategies.",
     '12': "I have hands-on experience in both frontend and backend development, ensuring smooth user interactions and robust server-side functionality. Proficient in HTML, CSS, and JavaScript for frontend design, I create engaging interfaces. On the backend, I leverage Java and Node.js to build scalable applications. Experienced with databases like MongoDB, MySQL, and SQL Server, along with the Spring Boot framework, I deliver tailored solutions to meet project needs.",
     '13': "Good ideas and designs are the cornerstone of my approach to frontend development and DevOps. Proficient in HTML, CSS, and JavaScript, I craft intuitive interfaces. In DevOps, I excel in CI/CD pipelines, infrastructure as code, and containerization using tools like Docker and Kubernetes. With a keen eye for design and a strong foundation in DevOps principles, I deliver optimized solutions that align with business objectives.",
     '23': "Beginning with a focus on good structure and security, I bring proficiency in backend technologies such as Java and Node.js, coupled with expertise in DevOps tools like Docker and Kubernetes. Prioritizing robust architecture and stringent security measures, I ensure the development of secure, scalable, and high-performing applications. This approach fosters seamless integration across various components, delivering reliable solutions tailored to diverse project needs.",
     '123': "Integrating frontend, backend, and DevOps seamlessly, I oversee the development of comprehensive solutions. With a focus on cohesive collaboration, I ensure that each component complements the others, resulting in a robust end-to-end project lifecycle. Leveraging frontend technologies for intuitive user interfaces, backend systems for robust functionality, and DevOps practices for streamlined deployment and maintenance, yields scalable, secure, and high-performing applications."
   }

   // Function to update the main content based on button click
   updateMainContent() {
     let combination = '';
     if (this.frontendClicked) {
       combination += '1';
     }
     if (this.backendClicked) {
       combination += '2';
     }
     if (this.devopsClicked) {
       combination += '3';
     }
     this.mainContent = this.combinations[combination] || "As an experienced full-stack developer, I excel in frontend, backend, and DevOps domains. My comprehensive expertise ensures I deliver tailored, robust solutions meeting diverse project requirements. From crafting engaging user interfaces to optimizing backend performance and streamlining deployment processes, I bring a holistic approach to development projects, driving efficiency and innovation.";
   }

   // Toggle frontend button
   toggleFrontend() {
    this.frontendClicked = !this.frontendClicked;
    this.updateMainContent();
  }

  // Toggle backend button
  toggleBackend() {
    this.backendClicked = !this.backendClicked;
    this.updateMainContent();
  }

  // Toggle devops button
  toggleDevops() {
    this.devopsClicked = !this.devopsClicked;
    this.updateMainContent();
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Scroll to the top of the page
    window.scrollTo(0, 115);
  }


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
    const downThreshold = 0.90 * endOfHomePosition;

    const upThreshold = 0.10 * endOfHomePosition;

    if (scrollPosition >= downThreshold) {
      this.router.navigateByUrl('/projects');
    } else if (scrollPosition <= upThreshold) {
      this.router.navigateByUrl('/'); // Navigate back to the About component
    }
  }
}
