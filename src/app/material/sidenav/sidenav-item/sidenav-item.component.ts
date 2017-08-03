import { Component, Input } from '@angular/core';
import { SidenavMenuItem } from '../sidenav-menu-item';
/* SidenavMenuItem is the model - place wherever you desire */

@Component({
  selector : 'sidenav-item',
  templateUrl: './sidenav-item.component.html'
})

export class SidenavItemComponent {
    @Input() menuItem: SidenavMenuItem;
    private _showChildren: boolean = false;

    clicked(event: MouseEvent) {
        this._showChildren = !this._showChildren;
    }
}
