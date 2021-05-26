import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NelRadioService {
  selected$ = new ReplaySubject<any>(1);

  select(value: any): void {
    this.selected$.next(value);
  }
}
