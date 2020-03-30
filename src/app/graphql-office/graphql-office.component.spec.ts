import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphqlOfficeComponent } from './graphql-office.component';

describe('GraphqlOfficeComponent', () => {
  let component: GraphqlOfficeComponent;
  let fixture: ComponentFixture<GraphqlOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphqlOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphqlOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
