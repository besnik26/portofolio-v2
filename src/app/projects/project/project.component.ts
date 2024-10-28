import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageSrc!: string;
  @Input() stackImages!: string[]; 
  @Input() codeLink!: string;
  @Input() demoLink!: string;
}
