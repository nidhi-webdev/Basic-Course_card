import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class Highlighted {

  constructor(private el: ElementRef, private ren: Renderer2) { }

  //mouseEnter
  @HostListener('mouseenter')
  onMouseEnter() {
    this.ren.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.ren.removeStyle(this.el.nativeElement, 'backgroundColor');
  }

  @HostListener('dblclick')
  onDoubleClick() {
    this.ren.setStyle(this.el.nativeElement, 'padding', '1.5rem');
  }

  @HostListener('keydown.enter', ['$event'])
  onEnterPress(event: any) {
    alert(`Enter Presses!' Value: ${(event.target.value)}`);
  }
}


