import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePdfMenuComponent } from './manage-pdf-menu.component';

describe('ManagePdfMenuComponent', () => {
  let component: ManagePdfMenuComponent;
  let fixture: ComponentFixture<ManagePdfMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePdfMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePdfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
