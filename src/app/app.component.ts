import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignDropdownComponent } from './components/sign-dropdown/sign-dropdown.component';
import { SignColorPickerComponent } from './components/sign-color-picker/sign-color-picker.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignDropdownComponent, SignColorPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('canvasElement', { static: true }) canvas!: ElementRef;
  title = 'Sign Creator';
  canvasContext!: CanvasRenderingContext2D
  unlistenMouseMove!: Function
  fontSelected: number = 2
  signing: boolean = false
  @HostListener('document:mouseup', ['$event'])
  onmouseup(event: any) {
    this.signing = false
  }

  ngAfterViewInit(): void {
    this.canvasContext = this.canvas.nativeElement.getContext('2d');
    this.canvas.nativeElement.style.backgroundColor = 'white';
  }

  getMousePosition(event: any) {
    let xCord, yCord;
    if (event.type.includes('touch')) {
      const touch = event.touches[0];
      xCord = touch.clientX;
      yCord = touch.clientY;
    } else if (event.type.includes('mouse')) {
      xCord = event.clientX;
      yCord = event.clientY;
    }
    let rect = this.canvas.nativeElement.getBoundingClientRect()
    let scaleX = this.canvas.nativeElement.width / rect.width
    let scaleY = this.canvas.nativeElement.height / rect.height;

    return {
      x: (xCord - rect.left) * scaleX,
      y: (yCord - rect.top) * scaleY
    }
  }

  mousedown(event: any) {
    this.signing = true;
    this.drawByEvent(event);
  }


  mousemove(event: any) {
    if (this.signing) {
      this.drawByEvent(event);
    }
  }

  mouseup(event: any) {
    this.signing = false
  }

  drawByEvent(event: any) {
    let mousPos = this.getMousePosition(event)
    this.canvasContext.fillRect(mousPos.x, mousPos.y, this.fontSelected, this.fontSelected);
  }

  setFontForSign(font: number) {
    this.fontSelected = font;
  }

  setColor(setcolor: any) {
    if (setcolor.id === 'pencil')
      this.canvasContext.fillStyle = setcolor.color
    else
      this.canvas.nativeElement.style.backgroundColor = setcolor.color
  }

  clearContent() {
    this.canvasContext.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
  }

  downloadContent() {
    let link = document.createElement('a')
    link.download = "mysign.png"
    link.href = this.getCanvasImageWithBackgroundColor()
    link.click()
  }

  getCanvasImageWithBackgroundColor() {

    const combinedCanvas = document.createElement("canvas");
    combinedCanvas.width = this.canvas.nativeElement.width;
    combinedCanvas.height = this.canvas.nativeElement.height;

    const combinedCtx = combinedCanvas.getContext('2d');
    if (combinedCtx) {
      combinedCtx.fillStyle = this.canvas.nativeElement.style.backgroundColor;
      combinedCtx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      combinedCtx.drawImage(this.canvas.nativeElement, 0, 0);
    }
    return combinedCanvas.toDataURL('image/png');
  }
}
