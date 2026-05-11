import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {
      name:'HTML',
      imgPath:'assets/images/stack/html.svg'
    },
    {
      name:'CSS',
      imgPath:'assets/images/stack/css.svg'
    },
    {
      name:'SCSS',
      imgPath:'assets/images/stack/scss.svg'
    },
    {
      name:'JAVASCRIPT',
      imgPath:'assets/images/stack/javascript.svg'
    },
    {
      name:'TYPESCRIPT',
      imgPath:'assets/images/stack/typescript.svg'
    },
    {
      name:'ANGULAR',
      imgPath:'assets/images/stack/angular.svg'
    },
    {
      name:'REACT',
      imgPath:'assets/images/stack/react.svg'
    },
    {
      name:'NODE JS',
      imgPath:'assets/images/stack/nodejs.svg'
    },
    {
      name:'EXPRESS JS',
      imgPath:'assets/images/stack/express.svg'
    },
    {
      name:'MONGO DB',
      imgPath:'assets/images/stack/mongodb.svg'
    },
    
  ]
}
