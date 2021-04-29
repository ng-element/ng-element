import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentList = [
    { name: 'icon' },
    { name: 'alert' },
    { name: 'empty' },
    { name: 'button' },
    { name: 'link' },
    { name: 'container' },
    { name: 'divider' },
    { name: 'layout' },
  ];
}
