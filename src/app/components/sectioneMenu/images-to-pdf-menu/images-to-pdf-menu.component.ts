import { Component } from '@angular/core';

@Component({
  selector: 'app-images-to-pdf-menu',
  templateUrl: './images-to-pdf-menu.component.html',
  styleUrls: ['./images-to-pdf-menu.component.scss']
})
export class ImagesToPdfMenuComponent {
  
  buttonsIconPath = [
    '../../../../assets/icon/input_icon.png',
    '../../../../assets/icon/output_icon.png',
    '../../../../assets/icon/filter.png'
  ];

  buttonsLabel = [
    'Input Folder',
    'Output Folder',
    'Filter'
  ]

}
