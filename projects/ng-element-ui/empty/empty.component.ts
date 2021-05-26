import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'nel-empty',
  templateUrl: './empty.component.html'
})

export class NelEmptyComponent {
  @Input() nelDescription = '暂无数据';
  @Input() nelImage = '';
  @Input() nelImageSize = 0;
  @Input() nelFooter?: string | TemplateRef<void>;
}
