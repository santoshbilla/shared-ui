import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
})
export class Button {
  const(event: any) {
    event.preventDefault();
    this.buttonClicked.emit();
  }
  @Output() buttonClicked = new EventEmitter<void>();
}
