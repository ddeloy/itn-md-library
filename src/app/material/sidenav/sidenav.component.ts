import {Component, Input, OnInit} from '@angular/core';
import { SidenavMenuItem } from './sidenav-menu-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent implements OnInit {
  invert = false;
  @Input() sideWidth = "sm"; // not being used for now - fixed width is defined in _sidenav.scss
  calloutType: string = "success";
  autoClose: boolean = false;

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

  openCallout(el: any, type: string, message: string, action: string = "", autoClose: boolean = false, duration: number = 0) {
    if(!el.opened) {
      // do the following only if callout in bot already opened
      el._elementRef.nativeElement.classList.add(type);
      el._elementRef.nativeElement.innerHTML = message;
      if(action != "") {
        let btnNode = document.createElement("button");
        btnNode.className = "btn-callout-action";
        btnNode.onclick = function() {
          // TODO: define function
        }
        let textnode = document.createTextNode(action);
        btnNode.appendChild(textnode);
        el._elementRef.nativeElement.appendChild(btnNode);
      }
    }
    el.toggle();
    //required only if auto-close needed
    if(autoClose && el.opened) {
      window.setTimeout(function(){el.close()}, duration);
    }
  }

  onCalloutClose(el: any) {
    let clList = el._elementRef.nativeElement.classList;
    clList.remove('success');
    clList.remove('error');
    clList.remove('warning');
    clList.remove('info');
    el._elementRef.nativeElement.classList = clList;
    el._elementRef.nativeElement.innerHTML = "";
  }

}
