import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesToPdfMenuComponent } from './images-to-pdf-menu.component';

describe('ImagesToPdfMenuComponent', () => {
  let component: ImagesToPdfMenuComponent;
  let fixture: ComponentFixture<ImagesToPdfMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesToPdfMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesToPdfMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
