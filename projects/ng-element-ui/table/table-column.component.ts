import { Component, Input } from '@angular/core';

@Component({
    selector: 'nel-table-column',
    templateUrl: './table-column.component.html',
    standalone: false
})

export class NelTableColumnComponent {
  @Input() label?: string;
  @Input() prop?: string;
}
