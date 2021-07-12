import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NelCheckboxService {
  selected$ = new ReplaySubject<any>();

  select(val: { value: any, checked: boolean }): void {
    this.selected$.next(val);
  }
}
