import { ChangeDetectionStrategy, Component, Input, Optional, TemplateRef, OnInit, ChangeDetectorRef } from '@angular/core';
import { collapseMotion } from 'ng-element-ui/core/animation';
import { NelCollapseComponent } from './collapse.component';

@Component({
  selector: 'nel-collapse-item',
  templateUrl: './collapse-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [collapseMotion]
})

export class NelCollapseItemComponent implements OnInit {
  @Input() nelTitle!: string | TemplateRef<void>;
  @Input() nelDisabled = false;
  @Input() nelName: string | number = Math.random().toString(16).substr(2, 8);
  expanded = false;

  constructor(
    @Optional() private root: NelCollapseComponent,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.root.itemList.set(this.nelName, this);
  }

  updateActiveStatus(val: boolean): void {
    this.expanded = val;

    this.cdr.detectChanges();
  }

  change(): void {
    if (!this.nelDisabled) {
      this.expanded = !this.expanded;
      this.root.changeItemActive(this.nelName, this.expanded);
    }
  }
}
