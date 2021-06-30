import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDayCardComponent } from './open-day-card.component';

describe('OpenDayCardComponent', () => {
  let component: OpenDayCardComponent;
  let fixture: ComponentFixture<OpenDayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDayCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenDayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
