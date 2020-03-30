import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestOfficeComponent } from './rest-office.component';

describe('RestOfficeComponent', () => {
  let component: RestOfficeComponent;
  let fixture: ComponentFixture<RestOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
