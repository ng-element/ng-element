import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NelScrollbarComponent } from 'ng-element-ui/scrollbar';
import { filter } from 'rxjs/operators';
import { RouterList } from './router';

@Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    standalone: false
})

export class ExampleComponent implements OnInit {
  groupList = RouterList;
  @ViewChild('scrollbar', { static: false }) scrollbar!: NelScrollbarComponent;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollbar.vertical.scrollTop = 0;
        this.scrollbar.verticalScrollHandle(true);
      });
  }
}
