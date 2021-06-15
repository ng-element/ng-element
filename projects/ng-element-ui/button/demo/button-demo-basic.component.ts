import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-button-basic',
  template: `
  <div nel-row>
    <button nel-button>默认按钮</button>
    <button nel-button [nelType]="'primary'">主要按钮</button>
    <button nel-button [nelType]="'success'">成功按钮</button>
    <button nel-button [nelType]="'info'">信息按钮</button>
    <button nel-button [nelType]="'warning'">警告按钮</button>
    <button nel-button [nelType]="'danger'">危险按钮</button>
  </div>
  <div nel-row>
    <button nel-button nelPlain>朴素按钮</button>
    <button nel-button [nelType]="'primary'" nelPlain>主要按钮</button>
    <button nel-button [nelType]="'success'" nelPlain>成功按钮</button>
    <button nel-button [nelType]="'info'" nelPlain>信息按钮</button>
    <button nel-button [nelType]="'warning'" nelPlain>警告按钮</button>
    <button nel-button [nelType]="'danger'" nelPlain>危险按钮</button>
  </div>
  <div nel-row>
    <button nel-button nelRound>圆角按钮</button>
    <button nel-button [nelType]="'primary'" nelRound>主要按钮</button>
    <button nel-button [nelType]="'success'" nelRound>成功按钮</button>
    <button nel-button [nelType]="'info'" nelRound>信息按钮</button>
    <button nel-button [nelType]="'warning'" nelRound>警告按钮</button>
    <button nel-button [nelType]="'danger'" nelRound>危险按钮</button>
  </div>
  <div nel-row>
    <button nel-button [nelIcon]="'search'" nelCircle></button>
    <button nel-button [nelType]="'primary'" [nelIcon]="'edit'" nelCircle></button>
    <button nel-button [nelType]="'success'" [nelIcon]="'check'" nelCircle></button>
    <button nel-button [nelType]="'info'" [nelIcon]="'message'" nelCircle></button>
    <button nel-button [nelType]="'warning'" [nelIcon]="'star-off'" nelCircle></button>
    <button nel-button [nelType]="'danger'" [nelIcon]="'delete'" nelCircle></button>
  </div>
  `,
  styles: [
    `
      .el-row {
        margin-bottom: 20px;
        align-items: baseline;
      }

      .el-row:last-child {
        margin-bottom: 0;
      }
    `
  ]
})

export class NelDemoButtonBasicComponent { }
