import { Directive, TemplateRef, Renderer2, ViewContainerRef, Input, OnDestroy } from '@angular/core';

@Directive({
  selector: '[stringTemplate]',
})
export class NelStringTemplateDirective implements OnDestroy {
  @Input()
  set stringTemplate(value: string | TemplateRef<any>) {
    this.updateView(value);
  }

  textNode?: Text;

  constructor(private vcRef: ViewContainerRef, private renderer: Renderer2) { }

  private updateView(value: string | TemplateRef<any>): void {
    this.clear();

    if (!value) {
      return;
    }

    if (value instanceof TemplateRef) {
      this.vcRef.createEmbeddedView(value);
    } else {
      this.textNode = this.renderer.createText(value);
      const elem = this.vcRef.element.nativeElement;

      this.renderer.insertBefore(elem.parentNode, this.textNode, elem);
    }
  }

  private clear(): void {
    this.vcRef.clear();
    if (this.textNode) {
      this.renderer.removeChild(this.textNode.parentNode, this.textNode);
    }
  }

  ngOnDestroy(): void {
    this.clear();
  }
}
