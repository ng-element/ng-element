import { Component } from '@angular/core';

@Component({
    selector: 'app-quickstart',
    templateUrl: './quickstart.component.html',
    styleUrls: ['./quickstart.component.scss'],
    standalone: false
})

export class QuickstartComponent {
  quickstartCss =
    `{
  "styles": [
    "node_modules/ng-element-ui/ng-element-ui.css"
  ]
}`;
  quickstart =
    `import { NelButtonModule } from 'ng-element-ui/button';;
……

@NgModule({
  imports: [
    NelButtonModule
    ……
  ]
})`;
}