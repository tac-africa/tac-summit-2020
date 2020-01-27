import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPageNavComponent } from './header-page-nav.component';

describe('HeaderPageNavComponent', () => {
  let component: HeaderPageNavComponent;
  let fixture: ComponentFixture<HeaderPageNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPageNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
