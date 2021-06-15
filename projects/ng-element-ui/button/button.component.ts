import { Component, Input, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';

@Component({
  selector: 'button[nel-button]',
  template: `
    <i *ngIf="nelIcon" nel-icon [nelType]="nelIcon"></i>
    <i *ngIf="nelLoading" nel-icon [nelType]="'loading'"></i>
    <ng-content></ng-content>
  `,
  host: {
    '[class.el-button]': `true`,
    '[class.el-button--primary]': `nelType === 'primary'`,
    '[class.el-button--success]': `nelType === 'success'`,
    '[class.el-button--info]': `nelType === 'info'`,
    '[class.el-button--warning]': `nelType === 'warning'`,
    '[class.el-button--danger]': `nelType === 'danger'`,
    '[class.is-plain]': `nelPlain`,
    '[class.is-round]': `nelRound`,
    '[class.is-circle]': `nelCircle`,
    '[class.is-disabled]': `nelDisabled`,
    '[class.el-button--text]': `nelType === 'text'`,
    '[class.is-loading]': `nelLoading`,
    '[class.el-button--medium]': `nelSize === 'medium'`,
    '[class.el-button--small]': `nelSize === 'small'`,
    '[class.el-button--mini]': `nelSize === 'mini'`,
  }
})

export class NelButtonComponent implements AfterViewInit {
  static ngAcceptInputType_nelPlain: BooleanInput;
  static ngAcceptInputType_nelRound: BooleanInput;
  static ngAcceptInputType_nelCircle: BooleanInput;
  static ngAcceptInputType_nelLoading: BooleanInput;

  @Input() nelType = '';
  @Input() @InputBoolean() nelPlain = false;
  @Input() @InputBoolean() nelRound = false;
  @Input() nelIcon = '';
  @Input() @InputBoolean() nelCircle = false;
  nelDisabled = false;
  @Input() set disabled(value: any) {
    if (value === '' || value) {
      this.nelDisabled = true;
    }
  }
  @Input() @InputBoolean() nelLoading = false;
  @Input() nelSize = '';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
  }

  insertSpan(nodes: NodeList, renderer: Renderer2): void {
    nodes.forEach(node => {
      if (node.nodeName === '#text') {
        const span = renderer.createElement('span');
        const parent = renderer.parentNode(node);
        renderer.insertBefore(parent, span, node);
        renderer.appendChild(span, node);
      }
    });
  }
}
