import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-button-basic',
  template: `
  <div>
    <button nel-button>默认按钮</button>
    <button nel-button [nelType]="'primary'">主要按钮</button>
    <button nel-button [nelType]="'success'">成功按钮</button>
    <button nel-button [nelType]="'info'">信息按钮</button>
    <button nel-button [nelType]="'warning'">警告按钮</button>
    <button nel-button [nelType]="'danger'">危险按钮</button>
  </div>
  <div>
    <button nel-button [nelPlain]="true">朴素按钮</button>
    <button nel-button [nelType]="'primary'" [nelPlain]="true">主要按钮</button>
    <button nel-button [nelType]="'success'" [nelPlain]="true">成功按钮</button>
    <button nel-button [nelType]="'info'" [nelPlain]="true">信息按钮</button>
    <button nel-button [nelType]="'warning'" [nelPlain]="true">警告按钮</button>
    <button nel-button [nelType]="'danger'" [nelPlain]="true">危险按钮</button>
  </div>
  <div>
    <button nel-button [nelRound]="true">圆角按钮</button>
    <button nel-button [nelType]="'primary'" [nelRound]="true">主要按钮</button>
    <button nel-button [nelType]="'success'" [nelRound]="true">成功按钮</button>
    <button nel-button [nelType]="'info'" [nelRound]="true">信息按钮</button>
    <button nel-button [nelType]="'warning'" [nelRound]="true">警告按钮</button>
    <button nel-button [nelType]="'danger'" [nelRound]="true">危险按钮</button>
  </div>
  <div>
    <button nel-button [nelIcon]="'search'" [nelCircle]="true"></button>
    <button nel-button [nelType]="'primary'" [nelIcon]="'edit'" [nelCircle]="true"></button>
    <button nel-button [nelType]="'success'" [nelIcon]="'check'" [nelCircle]="true"></button>
    <button nel-button [nelType]="'info'" [nelIcon]="'message'" [nelCircle]="true"></button>
    <button nel-button [nelType]="'warning'" [nelIcon]="'star-off'" [nelCircle]="true"></button>
    <button nel-button [nelType]="'danger'" [nelIcon]="'delete'" [nelCircle]="true"></button>
  </div>
  `
})

export class NelDemoButtonBasicComponent { }
