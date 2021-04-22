import { TestBed } from '@angular/core/testing';

import { NgElementUiService } from './ng-element-ui.service';

describe('NgElementUiService', () => {
  let service: NgElementUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgElementUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
