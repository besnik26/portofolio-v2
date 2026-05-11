import { Component } from '@angular/core';
import { ProjectComponent } from "./project/project.component";
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectComponent, ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
