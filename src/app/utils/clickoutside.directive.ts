import { Directive, ElementRef, EventEmitter, HostListener, Output } from "@angular/core";

@Directive({
    selector: "[clickedOutside]",
    standalone: true
})
export class ClickedOutsideDirective {

    @Output() clickedOutside = new EventEmitter();

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('document:click', ['$event.target'])
    onclick(targetElement:HTMLElement) {
        if(!targetElement)
            return

        if(!this.elementRef.nativeElement.contains(targetElement))
            this.clickedOutside.emit(true)

    }
}