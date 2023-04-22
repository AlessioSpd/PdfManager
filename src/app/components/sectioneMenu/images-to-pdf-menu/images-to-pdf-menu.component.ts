import { Component } from '@angular/core';

@Component({
  selector: 'app-images-to-pdf-menu',
  templateUrl: './images-to-pdf-menu.component.html',
  styleUrls: ['./images-to-pdf-menu.component.scss']
})
export class ImagesToPdfMenuComponent {

  buttonsLabel = [
    'Input Folder',
    'Output Folder',
    'Filter'
  ];

  convert(){
    
  }
}
