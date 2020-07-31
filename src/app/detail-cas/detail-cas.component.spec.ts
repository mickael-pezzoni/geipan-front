import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCasComponent } from './detail-cas.component';

describe('DetailCasComponent', () => {
  let component: DetailCasComponent;
  let fixture: ComponentFixture<DetailCasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
