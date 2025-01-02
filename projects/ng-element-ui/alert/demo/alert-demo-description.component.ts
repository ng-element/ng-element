import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-alert-description',
    template: `
    <nel-alert [nelTitle]="'带辅助性文字介绍'" [nelType]="'success'"
      [nelDescription]="'这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……'">
    </nel-alert>
  `,
    styles: [
        `
      nel-alert:first-child {
        margin: 0;
      }
      nel-alert {
        margin: 20px 0 0;
      }
    `
    ],
    standalone: false
})

export class NelDemoAlertDescriptionComponent { }
