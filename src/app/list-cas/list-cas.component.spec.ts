import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasComponent } from './list-cas.component';

describe('ListCasComponent', () => {
  let component: ListCasComponent;
  let fixture: ComponentFixture<ListCasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
