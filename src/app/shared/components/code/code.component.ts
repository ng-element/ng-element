import { Component, Input } from '@angular/core';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})

export class CodeComponent {
  @Input() code?: string;

  constructor(
    private messageS: NelMessageService
  ) { }

  copy(event: boolean): void {
    if (event) {
      this.messageS.success('复制成功');
    } else {
      this.messageS.error('复制失败');
    }
  }
}
