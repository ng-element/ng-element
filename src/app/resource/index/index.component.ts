import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-index',
  templateUrl: './index.component.html'
})

export class IndexComponent {
  goPlus() {
    window.open('https://ng-element.github.io/ng-element-plus', '_blank');
  }
}
