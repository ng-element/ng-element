import { Component, OnInit } from '@angular/core';
import { AppService } from './../app.service';

@Component({
  selector: 'app-empty',
  templateUrl: './empty.component.html',
  host: {
    '[class.article]': 'true'
  }
})

export class EmptyComponent implements OnInit {
  codeBasic = '.';
  codeImage = '.';
  codeImageSize = '.';
  codeFooter = '.';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getCode('components-empty-demo-basic.component').subscribe((data) => {
      this.codeBasic = data;
    });
    this.appService.getCode('components-empty-demo-image.component').subscribe((data) => {
      this.codeImage = data;
    });
    this.appService.getCode('components-empty-demo-image-size.component').subscribe((data) => {
      this.codeImageSize = data;
    });
    this.appService.getCode('components-empty-demo-footer.component').subscribe((data) => {
      this.codeFooter = data;
    });
  }
}
