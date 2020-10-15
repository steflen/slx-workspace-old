import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/*
 *  =========================================================
 *  ==== USAGE ====
 *
 *  in any component, put a scss class
 *
 *  .fancy-hover-style{
 *    background: #666666;  //
 *  }
 *
 *  then, in the html-template link the style to the directive
 *
 *  <fancy-component
 *    *ngFor="let item of displays | values"
 *    slxHoverStyle="fancy-hover-style"
 *  ></fancy-component>
 *
 *  =========================================================
 * */

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
