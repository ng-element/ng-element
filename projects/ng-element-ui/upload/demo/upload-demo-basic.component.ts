import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-upload-basic',
    template: `
    <nel-upload [tip]="tip" [(ngModel)]="fileList">
      <button class="el-button el-button--primary" aria-disabled="false" type="button">
        <span class="">Click to upload</span>
      </button>
      <ng-template #tip>
        <div class="el-upload__tip"> jpg/png files with a size less than 500KB. </div>
      </ng-template>
    </nel-upload>
  `,
    standalone: false
})

export class NelDemoUploadBasicComponent {
  fileList = [
    {
      name: 'element-plus-logo.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
    {
      name: 'element-plus-logo2.svg',
      url: 'https://element-plus.org/images/element-plus-logo.svg',
    },
  ];
}
