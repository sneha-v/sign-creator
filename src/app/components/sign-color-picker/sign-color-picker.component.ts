import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ClickedOutsideDirective } from '../../utils/clickoutside.directive';

@Component({
  selector: 'app-sign-color-picker',
  standalone: true,
  imports: [CommonModule, ClickedOutsideDirective],
  templateUrl: './sign-color-picker.component.html',
  styleUrl: './sign-color-picker.component.scss'
})
export class SignColorPickerComponent {
  colorsList: string[] = [
    "black",
    "red",
    "blue",
    "green",
    "white",
    "yellow",
    "orange",
    "grey"
  ];
  @Input() initialColor:string = ''
  selectedColor:string = '';
  @Output() changedColor = new EventEmitter();
  show:boolean = false;
  @Input() id:string = ""

  ngOnInit():void {
    this.selectedColor = this.initialColor
  }

  colorChanged(color: string) {
    this.show = false;
    this.selectedColor = color;
    this.changedColor.emit({id: this.id, color: this.selectedColor});
  }

  openOrClosePicker() {
    this.show = !this.show;
  }
  closePicker() {
    this.show = false;
  }
  
}
