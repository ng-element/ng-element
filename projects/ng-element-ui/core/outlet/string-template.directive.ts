import { Directive, TemplateRef, ViewContainerRef, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

export class StringTemplateContext {
  public $implicit: any;
}

@Directive({
    selector: '[stringTemplate]',
    standalone: false
})
export class NelStringTemplateDirective implements OnChanges, OnDestroy {
  private context = new StringTemplateContext();
  @Input() stringTemplate: any | TemplateRef<any> = null;
  @Input() stringTemplateContext: any | null = null;

  textNode?: Text;

  constructor(
    private vcRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) { }

  private updateView(): void {
    this.clear();

    if (!this.stringTemplate) {
      return;
    }

    const isTemplateRef = this.stringTemplate instanceof TemplateRef;
    const templateRef = (isTemplateRef ? this.stringTemplate : this.templateRef) as any;
    this.vcRef.createEmbeddedView(
      templateRef,
      isTemplateRef ? this.stringTemplateContext : this.context
    );
  }

  private clear(): void {
    this.vcRef.clear();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateView();
  }

  ngOnDestroy(): void {
    this.clear();
  }
}
