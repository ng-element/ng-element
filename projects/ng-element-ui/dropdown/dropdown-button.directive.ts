import { Directive, AfterViewInit, Renderer2, Host, Optional, ElementRef } from '@angular/core';
import { NelButtonGroupComponent } from 'ng-element-ui/button';

@Directive({
    selector: '[nel-button][nel-dropdown]',
    standalone: false
})

export class NelDropdownButtonDirective implements AfterViewInit {
  constructor(
    private renderer: Renderer2,
    @Host() @Optional() private nelButtonGroupComponent: NelButtonGroupComponent,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit(): void {
    const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
    if (this.nelButtonGroupComponent && parentElement) {
      this.renderer.addClass(parentElement, 'el-dropdown');
      this.renderer.addClass(this.elementRef.nativeElement, 'el-dropdown__caret-button');
    }
  }
}
