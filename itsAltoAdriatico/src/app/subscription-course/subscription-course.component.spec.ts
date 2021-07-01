import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionCourseComponent } from './subscription-course.component';

describe('SubscriptionCourseComponent', () => {
  let component: SubscriptionCourseComponent;
  let fixture: ComponentFixture<SubscriptionCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
