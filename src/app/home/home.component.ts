import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/resume/Besnik-Beka-CV.pdf';  
    link.download = 'Besnik-Beka-CV.pdf';  
    link.click();
  }
}
