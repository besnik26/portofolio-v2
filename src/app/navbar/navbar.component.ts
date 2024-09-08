import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, ElementRef, HostListener, Output, EventEmitter} from '@angular/core';
import {NgClass} from "@angular/common";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgClass, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  activeLang: any;
  isMenuOpen: boolean = false;
  constructor(){

  }

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @Output() scrollTo = new EventEmitter<string>();

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const screenWidth = window.innerWidth;
      const offset = screenWidth < 768 ? -100 : -200;
      this.toggleMenu();
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  }
 


}

  
