import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  host: {
    'class': 'article'
  }
})

export class LinkComponent implements OnInit {
  codeBasic = '.';
  codeDisabled = '.';
  codeUnderline = '.';
  codeIcon = '.';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getCode('components-link-demo-basic.component').subscribe((data) => {
      this.codeBasic = data;
    });
    this.appService.getCode('components-link-demo-disabled.component').subscribe((data) => {
      this.codeDisabled = data;
    });
    this.appService.getCode('components-link-demo-underline.component').subscribe((data) => {
      this.codeUnderline = data;
    });
    this.appService.getCode('components-link-demo-icon.component').subscribe((data) => {
      this.codeIcon = data;
    });
  }
}
