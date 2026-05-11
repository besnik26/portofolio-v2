import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  links = [
    {
      linkUrl:"https://www.linkedin.com/in/besnik-beka-658b001b2?trk=people-guest_people_search-card",
      imageUrl:"assets/images/linkedin-cyan.svg",
      name:"Linkedin",
      newTab: true
    },
    {
      linkUrl:"https://github.com/besnik26",
      imageUrl:"assets/images/github-cyan.svg",
      name:"Github",
      newTab: true
    },
    {
      linkUrl:"mailto:besnikbeka2001@gmail.com",
      imageUrl:"assets/images/mail-cyan.svg",
      name:"Email",
      newTab: false
    },

  ]
 
}
