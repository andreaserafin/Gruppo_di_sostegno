import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOpendayComponent } from './subscription-openday.component';

describe('SubscriptionOpendayComponent', () => {
  let component: SubscriptionOpendayComponent;
  let fixture: ComponentFixture<SubscriptionOpendayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionOpendayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionOpendayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
