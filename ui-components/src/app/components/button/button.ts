import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
})
export class Button {
  const() {
    console.log('Button component initialized');
  }
}
