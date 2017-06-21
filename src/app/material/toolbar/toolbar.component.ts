import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showMenu = false;

  items = [{
    text: 'Refresh'
  }, {
    text: 'Settings'
  }, {
    text: 'Help',
    disabled: true
  }, {
    text: 'Sign Out'
  }];

  onMenuClick() {
    this.showMenu = !this.showMenu;
  }
  constructor() { }

  ngOnInit() {
  }

}
