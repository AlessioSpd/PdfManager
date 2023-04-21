import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandendMenuComponent } from './landend-menu.component';

describe('LandendMenuComponent', () => {
  let component: LandendMenuComponent;
  let fixture: ComponentFixture<LandendMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandendMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandendMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
