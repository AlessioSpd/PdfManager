import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfToImagesMenuComponent } from './pdf-to-images-menu.component';

describe('PdfToImagesMenuComponent', () => {
  let component: PdfToImagesMenuComponent;
  let fixture: ComponentFixture<PdfToImagesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfToImagesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfToImagesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
