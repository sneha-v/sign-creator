import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-dropdown',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-dropdown.component.html',
  styleUrl: './sign-dropdown.component.scss'
})
export class SignDropdownComponent {
  selectedFont: number = 2
  @Output() fontChange = new EventEmitter()
  fonts = [
    {
      "pixel": 2,
      "size": "Small"
    },
    {
      "pixel": 4,
      "size": "Medium"
    },
    {
      "pixel": 6,
      "size": "Large"
    }
  ]


  sizeChange(value: number) {
    this.selectedFont = value
    this.fontChange.emit(this.selectedFont)
  }
}
