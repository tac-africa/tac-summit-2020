import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCreationLabComponent } from './co-creation-lab.component';

describe('CoCreationLabComponent', () => {
  let component: CoCreationLabComponent;
  let fixture: ComponentFixture<CoCreationLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCreationLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCreationLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
