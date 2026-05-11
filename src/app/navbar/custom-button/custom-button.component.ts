import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() isMenuOpen!:boolean;

  @Output() toggleMenuEvent = new EventEmitter<void>();

  ontoggleClick(){
    this.toggleMenuEvent.emit()
  }
}
