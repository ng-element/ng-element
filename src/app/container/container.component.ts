import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  host: {
    '[class.article]': 'true'
  }
})

export class ContainerComponent implements OnInit {
  codeBasic = '.';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getCode('components-container-demo-basic.component').subscribe((data) => {
      this.codeBasic = data;
    });
  }
}
