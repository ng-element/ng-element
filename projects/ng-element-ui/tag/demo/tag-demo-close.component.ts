import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-tag-close',
    template: `
    <nel-tag
      *ngFor="let tag of dynamicTags"
      nelClosable
      (nelOnClose)="handleClose(tag)">
      {{tag}}
    </nel-tag>
    <button nel-button class="button-new-tag" [nelSize]="'small'" (click)="addTag()">+ New Tag</button>
  `,
    styles: [
        `
      .el-tag + .el-tag {
        margin-left: 10px;
      }
      .button-new-tag {
        margin-left: 10px;
        height: 32px;
        line-height: 30px;
        padding-top: 0;
        padding-bottom: 0;
      }
      .input-new-tag {
        width: 90px;
        margin-left: 10px;
        vertical-align: bottom;
      }
    `
    ],
    standalone: false
})

export class NelDemoTagCloseComponent {
  dynamicTags = ['标签一', '标签二', '标签三'];

  addTag(): void {
    this.dynamicTags.push(`标签${this.dynamicTags.length + 1}`);
  }

  handleClose(tag: string): void {
    this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
  }
}
