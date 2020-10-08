import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[slxHoverStyle]',
})
export class HoverStyleDirective {
  constructor(public elementRef: ElementRef) {}

  @Input('slxHoverStyle') hoverStyle: any;

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.classList.add(this.hoverStyle);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.classList.remove(this.hoverStyle);
  }
}
