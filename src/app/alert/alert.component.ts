import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  host: {
    '[class]': `'article'`
  }
})

export class AlertComponent { }
