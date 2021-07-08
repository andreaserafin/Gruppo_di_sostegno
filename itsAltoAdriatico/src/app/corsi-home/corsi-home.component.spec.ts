import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsiHomeComponent } from './corsi-home.component';

describe('CorsiHomeComponent', () => {
  let component: CorsiHomeComponent;
  let fixture: ComponentFixture<CorsiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorsiHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
