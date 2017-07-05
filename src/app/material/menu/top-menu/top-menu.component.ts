import { Component, Input, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ConnectedPositionStrategy, MdMenuTrigger } from '@angular/material';

const originWithFallbackPosition = ConnectedPositionStrategy.prototype.withFallbackPosition;
ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
  overlayPos.overlayX = 'start';
  if ( this._preferredPositions.length) {
    return this;
  }
  return originWithFallbackPosition.apply(this, arguments);
};

@Component({
  selector: 'top-menu',
  templateUrl: 'top-menu.component.html',
})
export class TopMenuComponent {
  @Input() items: any[];
  @Input() color: string = "default";

  constructor(private elementRef: ElementRef) { }

  @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  onMenuOpen(trigger: any, items: any[]) {
    let catCount = 0;
    items.forEach(item => {
      if(item.isCategory){ catCount++; }
    });
    let el = document.getElementById(trigger._overlayRef._pane.id);
    if(catCount >= 3) {
      el.className += ' menu-horz';
    }
    trigger.onMenuOpen.observers = [];
  } 

  

  openMenu(trigger: MdMenuTrigger, level: number, event) {
    this.triggers
      .filter((x: any) => x._element.nativeElement.dataset.level >= level && x !== trigger)
      .forEach(x => x.closeMenu());
    trigger.openMenu();
    if(event) {
      if(!event.currentTarget.className.includes(' open')) {
        event.currentTarget.className += ' open';
      }      
    }
  }

  closeMenu() {
    this.triggers.forEach((x: any) => {
      x._element.nativeElement.className = 
        x._element.nativeElement.className.replace('open', '');
      x.closeMenu();
    });
  }
}
