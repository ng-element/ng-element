import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-button-size',
  template: `
  <div>
    <button nel-button>默认按钮</button>
    <button nel-button [nelSize]="'medium'">中等按钮</button>
    <button nel-button [nelSize]="'small'">小型按钮</button>
    <button nel-button [nelSize]="'mini'">超小按钮</button>
  </div>
  <div>
    <button nel-button [nelRound]="true">默认按钮</button>
    <button nel-button [nelSize]="'medium'" [nelRound]="true">中等按钮</button>
    <button nel-button [nelSize]="'small'" [nelRound]="true">小型按钮</button>
    <button nel-button [nelSize]="'mini'" [nelRound]="true">超小按钮</button>
  </div>
  `
})

export class DemoButtonSizeComponent { }
