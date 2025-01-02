import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-avatar-error',
    template: `
    <div class="demo-type">
      <nel-avatar [nelSize]="60" [nelSrc]="'https://empty'" (onError)="errorHandler()">
        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"/>
      </nel-avatar>
    </div>
  `,
    standalone: false
})

export class NelDemoAvatarErrorComponent {
  errorHandler(): boolean {
    return true;
  }
}
