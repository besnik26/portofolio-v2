import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, ElementRef, HostListener} from '@angular/core';
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
  isDropdownOpen: boolean = false;
  isSecondDropdownOpen:boolean = false;
  isLangDropdownOpen:boolean = false;
  isMenuOpen: boolean = false;
  constructor(){

  }

  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isDropdownOpen = false;
    this.isSecondDropdownOpen = false;
    this.isLangDropdownOpen = false;
  }
}
