import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'nel-demo-backtop-target',
    template: `
    Scroll down to see the bottom-right button.
    <div #scrollSection class="scrollContainer">
      <div class="scrollSection">
        <nel-backtop [nelTarget]="scrollSection" [nelBottom]="160" [nelTemplate]="tpl">
          <ng-template #tpl>
            <div class="back-top-inner">UP</div>
          </ng-template>
        </nel-backtop>
      </div>
    </div>
  `,
    styles: [
        `
      .scrollContainer {
        height: 300px;
        overflow: auto;
        background-image: url(//zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg);
      }

      .scrollSection {
        height: 700px;
      }

      :host ::ng-deep .back-top-inner {
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }
    `
    ],
    standalone: false
})

export class NelDemoBacktopTargetComponent {
  @ViewChild('scrollSection', { static: false }) scrollSection!: ElementRef;
}
