import { Directive, ElementRef, Input, Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import { NelUpdateHostClassService } from 'ng-element-ui/core/services';

@Directive({
  selector: '[nel-icon]'
})

export class IconDirective implements OnChanges {
  readonly el: HTMLElement = this.elementRef.nativeElement;
  type = '';
  @Input() set nelType(value: string) {
    this.renderer.addClass(this.el, `el-icon-${value}`);
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private updateHostClassService: NelUpdateHostClassService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.type) {
      this.setClassMap();
    }
  }

  setClassMap(): void {
    this.updateHostClassService.updateHostClass(this.el, {
      [`el-icon-${this.type}`]: this.type
    });
  }
}
