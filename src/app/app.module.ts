import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LandendMenuComponent } from './components/sectioneMenu/landend-menu/landend-menu.component';
import { PdfToImagesMenuComponent } from './components/sectioneMenu/pdf-to-images-menu/pdf-to-images-menu.component';
import { ImagesToPdfMenuComponent } from './components/sectioneMenu/images-to-pdf-menu/images-to-pdf-menu.component';
import { ManagePdfMenuComponent } from './components/sectioneMenu/manage-pdf-menu/manage-pdf-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandendMenuComponent,
    PdfToImagesMenuComponent,
    ImagesToPdfMenuComponent,
    ManagePdfMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
