import { Component } from '@angular/core';
import { collapseMotion } from 'ng-element-ui/core/animation';

@Component({
    selector: 'nel-demo-animation-collapse',
    template: `
    <div>
      <button nel-button (click)="expanded = !expanded">Click Me</button>

      <div style="display: flex; margin-top: 20px; height: 100px;">
        <div class="transition-box" [@collapseMotion]="expanded ? 'expanded' : 'collapsed'">collapseMotion</div>
      </div>
    </div>
  `,
    styles: [
        `
      .transition-box {
        margin-bottom: 10px;
        width: 200px;
        /* height: 100px; */
        border-radius: 4px;
        background-color: #409eff;
        text-align: center;
        color: #fff;
        /* padding: 40px 20px; */
        margin-right: 20px;
        box-sizing: border-box;
      }
    `
    ],
    animations: [collapseMotion],
    standalone: false
})

export class NelDemoAnimationCollapseComponent {
  expanded = true;
}
