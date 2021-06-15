import { Component } from '@angular/core';
import { NelLoadingService } from 'ng-element-ui/loading';

@Component({
  selector: 'nel-demo-loading-fullscreen',
  template: `
    <nel-loading [nelLoading]="fullscreenLoading" nelFullscreen>
      <button nel-button
        [nelType]="'primary'"
        (click)="openFullScreen1()"
        v-loading.fullscreen.lock="fullscreenLoading">
        指令方式
      </button>
    </nel-loading>
    <button nel-button
      [nelType]="'primary'"
      (click)="openFullScreen2()">
      服务方式
    </button>
  `,
  styles: [
    `
      nel-loading {
        margin-bottom: 10px;
      }
    `
  ]
})

export class NelDemoLoadingFullscreenComponent {
  fullscreenLoading = false;

  constructor(
    private loading: NelLoadingService
  ) { }

  openFullScreen1(): void {
    this.fullscreenLoading = true;
    setTimeout(() => {
      this.fullscreenLoading = false;
    }, 2000);
  }

  openFullScreen2(): void {
    this.loading.show({
      text: 'Loading',
      spinner: 'loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    setTimeout(() => {
      this.loading.hide();
    }, 2000);
  }
}
