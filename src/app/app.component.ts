import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, AboutComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portofolio';

  @ViewChild('home', { static: false }) homeSection!: ElementRef;
  @ViewChild('about', { static: false }) aboutSection!: ElementRef;
  @ViewChild('projects', { static: false }) projectsSection!: ElementRef;

  scrollTo(section: string) {
    switch (section) {
      case 'home':
        this.homeSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'about':
        this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        this.projectsSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
        break;
    }
  }
}
