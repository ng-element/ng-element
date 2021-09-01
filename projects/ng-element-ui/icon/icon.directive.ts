import { Directive, ElementRef, Input, Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import { NelIconService } from './icon.service';

@Directive({
  selector: '[nel-icon]',
  host: {
    class: 'el-icon'
  }
})

export class NelIconDirective implements OnChanges {
  @Input() nelType?: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private iconService: NelIconService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const { nelType } = changes;
    if (nelType) {
      this.setSvg();
    }
  }

  setSvg() {
    if (this.nelType) {
      this.iconService.getIcon(this.nelType).subscribe((data) => {
        const svgElement = this.iconService.createSvgElementFromString(data);
        this.renderer.appendChild(this.elementRef.nativeElement, svgElement);
      });
    }
  }
}
