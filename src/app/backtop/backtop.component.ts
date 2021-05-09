import { Component } from '@angular/core';

@Component({
  selector: 'app-backtop',
  templateUrl: './backtop.component.html',
  host: {
    '[class]': `'article'`
  }
})

export class BacktopComponent { }
