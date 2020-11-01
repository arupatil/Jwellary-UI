import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Billing1Component } from './billing1.component';

describe('Billing1Component', () => {
  let component: Billing1Component;
  let fixture: ComponentFixture<Billing1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Billing1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Billing1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
