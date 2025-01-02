import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-tabs-editable',
    template: `
    <nel-tabs [(nelSelectedIndex)]="selectedIndex" [nelType]="'card'" nelEditable (nelOnEdit)="handleTabsEdit($event)">
      <nel-tab-pane
        *ngFor="let item of editableTabs"
        [nelLabel]="item.title"
      >
        {{item.content}}
      </nel-tab-pane>
    </nel-tabs>
  `,
    standalone: false
})

export class NelDemoTabsEditableComponent {
  selectedIndex = 0;
  editableTabs = [{
    title: 'Tab 1',
    content: 'Tab 1 content'
  }, {
    title: 'Tab 2',
    content: 'Tab 2 content'
  }];

  handleTabsEdit(event: any): void {
    if (event.action === 'add') {
      this.editableTabs.push({
        title: 'New Tab content',
        content: 'New Tab content'
      });
    } else {
      this.editableTabs = this.editableTabs.filter((item, index) => index !== event.index);
    }
    this.selectedIndex = this.editableTabs.length - 1;
  }
}
