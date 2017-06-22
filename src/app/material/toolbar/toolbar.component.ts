import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  showMenu = false;
  open1 = false;
  open2 = false;
  open3 = false;

  open11 = false;
  open21 = false;
  open31 = false;

  viewItems = [{
    text: 'Category 1',
    items: [{
      text: 'Item 1'
    }, {
      text: 'Item 2'
    }, {
      text: 'Item 3'
    }]
  }, {
    text: 'Category 2',
    items: [{
      text: 'Item 1'
    }, {
      text: 'Item 2'
    }, {
      text: 'Item 3'
    }]
  }];

  editItems = [{
    text: 'Category 1',
    items: [{
      text: 'Item 1'
    }, {
      text: 'Item 2'
    }, {
      text: 'Item 3'
    }]
  }, {
    text: 'Category 2',
    items: [{
      text: 'Item 1'
    }, {
      text: 'Item 2'
    }, {
      text: 'Item 3'
    }]
  }, {
    text: 'Category 3',
    items: [{
      text: 'Item 1'
    }, {
      text: 'Item 2'
    }, {
      text: 'Item 3'
    }]
  }];

  // items = [{
  //   text: 'Refresh'
  // }, {
  //   text: 'Settings'
  // }, {
  //   text: 'Help',
  //   disabled: true
  // }, {
  //   text: 'Sign Out'
  // }];

  onMenuClick() {
    this.showMenu = !this.showMenu;
  }
  constructor() { }

  ngOnInit() {
  }

}
