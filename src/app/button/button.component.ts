import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  host: {
    'class': 'article'
  }
})

export class ButtonComponent implements OnInit {
  codeBasic = '.';
  codeDisabled = '.';
  codeText = '.';
  codeIcon = '.';
  codeGroup = '.';
  codeLoading = '.';
  codeSize = '.';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getCode('components-button-demo-basic.component').subscribe((data) => {
      this.codeBasic = data;
    });
    this.appService.getCode('components-button-demo-disabled.component').subscribe((data) => {
      this.codeDisabled = data;
    });
    this.appService.getCode('components-button-demo-text.component').subscribe((data) => {
      this.codeText = data;
    });
    this.appService.getCode('components-button-demo-icon.component').subscribe((data) => {
      this.codeIcon = data;
    });
    this.appService.getCode('components-button-demo-group.component').subscribe((data) => {
      this.codeGroup = data;
    });
    this.appService.getCode('components-button-demo-loading.component').subscribe((data) => {
      this.codeLoading = data;
    });
    this.appService.getCode('components-button-demo-size.component').subscribe((data) => {
      this.codeSize = data;
    });
  }
}
