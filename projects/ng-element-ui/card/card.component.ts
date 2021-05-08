import { ChangeDetectionStrategy, Component, Input, TemplateRef, ElementRef } from '@angular/core';

export type ShadowType = 'always' | 'hover' | 'never';

@Component({
  selector: 'nel-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-always-shadow]': `nelShadow == 'always'`,
    '[class.is-hover-shadow]': `nelShadow == 'hover'`,
    '[class.is-never-shadow]': `nelShadow == 'never'`,
    '[class.box-card]': `true`,
  }
})

export class CardComponent {
  @Input() nelHeader?: string | TemplateRef<any>;
  @Input() nelBodyStyle: object = { padding: '20px' };
  @Input() nelShadow: ShadowType = 'always';

  constructor(
    private elementRef: ElementRef
  ) {
    this.elementRef.nativeElement.classList.add('el-card');
  }
}
