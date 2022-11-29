import { Component, Input } from '@angular/core';

@Component({
  selector: 'nel-transfer',
  templateUrl: './transfer.component.html'
})

export class NelTransferComponent {
  @Input() data: Array<any> = [];
}
