import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgElementUiComponent } from './ng-element-ui.component';

describe('NgElementUiComponent', () => {
  let component: NgElementUiComponent;
  let fixture: ComponentFixture<NgElementUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgElementUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgElementUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
