import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlashDetailsComponent } from './slash-details.component';

describe('SlashDetailsComponent', () => {
  let component: SlashDetailsComponent;
  let fixture: ComponentFixture<SlashDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlashDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlashDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
