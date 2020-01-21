import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectMattersComponent } from './subject-matters.component';

describe('SubjectMattersComponent', () => {
  let component: SubjectMattersComponent;
  let fixture: ComponentFixture<SubjectMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
