import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})

export class CodeComponent {
  @Input() code?: string;

  copy(event: MouseEvent): void {
    event.stopPropagation();
  }
}
