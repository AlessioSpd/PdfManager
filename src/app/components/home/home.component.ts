import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  w = 0;
  h = 0;

  buttonsName = ['PDF to Images', 'Images to PDF', 'Manage PDF'];
  buttonsNameShort = ['P2I', 'I2P', 'MP'];
  currentNames = this.buttonsName;

  menuSwitcher = 'landed';

  ngOnInit() {
    this.currentNames = this.buttonsName;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    if(this.w <= 750) this.currentNames = this.buttonsNameShort;
    else this.currentNames = this.buttonsName;
  }
}
