import { Component } from '@angular/core';

@Component({
  selector: 'app-images-to-pdf-menu',
  templateUrl: './images-to-pdf-menu.component.html',
  styleUrls: ['./images-to-pdf-menu.component.scss']
})
export class ImagesToPdfMenuComponent {

  buttonsLabel = [
    'Select Input Folder',
    'Select output Folder',
    'Select Filter',
  ];

  convert(){
    
  }
}
