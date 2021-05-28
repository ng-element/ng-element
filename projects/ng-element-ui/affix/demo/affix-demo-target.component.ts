import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nel-demo-affix-target',
  template: `
    <div #containerEle class="affix-container">
      <nel-affix [nelTarget]="containerEle" [nelOffset]="80">
        <button nel-button [nelType]="'primary'">指定容器</button>
      </nel-affix>
    </div>
  `,
  styles: [
    `
      .affix-container {
        text-align: center;
        height: 400px;
        border-radius: 4px;
        background: #ecf5ff;
      }
    `
  ]
})

export class NelDemoAffixTargetComponent {
  @ViewChild('containerEle', { static: false }) containerEle!: ElementRef;
}
