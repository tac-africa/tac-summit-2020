import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCreationGroupComponent } from './co-creation-group.component';

describe('CoCreationGroupComponent', () => {
  let component: CoCreationGroupComponent;
  let fixture: ComponentFixture<CoCreationGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoCreationGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoCreationGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
