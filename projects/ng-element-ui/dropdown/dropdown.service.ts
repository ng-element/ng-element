import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class NelDropdownService {
  selected$ = new ReplaySubject<void>();

  select(): void {
    this.selected$.next();
  }
}
