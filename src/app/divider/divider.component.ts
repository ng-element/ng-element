import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  host: {
    'class': 'article'
  }
})

export class DividerComponent implements OnInit {
  codeBasic = '.';
  codeContent = '.';
  codeDirection = '.';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getCode('components-divider-demo-basic.component').subscribe((data) => {
      this.codeBasic = data;
    });
    this.appService.getCode('components-divider-demo-content.component').subscribe((data) => {
      this.codeContent = data;
    });
    this.appService.getCode('components-divider-demo-direction.component').subscribe((data) => {
      this.codeDirection = data;
    });
  }
}
