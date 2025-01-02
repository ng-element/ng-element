import { Component, Input } from '@angular/core';

@Component({
    selector: 'nel-tree',
    templateUrl: './tree.component.html',
    standalone: false
})

export class NelTreeComponent {
  @Input() data: Array<any> = [];
}
