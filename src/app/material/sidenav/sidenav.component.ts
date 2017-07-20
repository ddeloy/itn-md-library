import {Component, Input, OnInit} from '@angular/core';
import { SidenavMenuItem } from './sidenav-menu-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  invert = false;
  @Input() sideWidth = "sm";

  constructor() { }

  ngOnInit() {
  }

  menuItems = [
      new SidenavMenuItem('Settings', 'User Management', '', '', [
        new SidenavMenuItem('', 'Company Settings', '', '', null),
        new SidenavMenuItem('', 'User Management', '', '', null),
        new SidenavMenuItem('', 'Shared Settings', '', '', null)
      ]),
      new SidenavMenuItem('', 'Users', '', '', null),
      new SidenavMenuItem('', 'Non-employee access', '', '', null),
      new SidenavMenuItem('', 'Roles', '', '', null),
      new SidenavMenuItem('', 'Data Access Groups', '', '', null)
  ];

}
