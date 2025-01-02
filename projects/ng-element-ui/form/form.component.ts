import { Component, AfterContentInit, Input, ContentChildren, QueryList } from '@angular/core';
import { NelFormItemComponent } from './form-item.component';

@Component({
    selector: 'nel-form',
    templateUrl: './form.component.html',
    standalone: false
})

export class NelFormComponent implements AfterContentInit {
  @Input('label-width') labelWidth?: string;
  @ContentChildren(NelFormItemComponent) items?: QueryList<NelFormItemComponent>;

  ngAfterContentInit(): void {
    if (this.items) {
      this.items.toArray().forEach(item => {
        item.labelWidth = this.labelWidth;
      });
    }
  }
}
