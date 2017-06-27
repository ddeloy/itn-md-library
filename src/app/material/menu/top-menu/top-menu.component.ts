import { Component, Input, QueryList, ViewChildren } from '@angular/core';
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


  @ViewChildren(MdMenuTrigger) triggers: QueryList<MdMenuTrigger>;

  openMenu(trigger: MdMenuTrigger, level: number) {
    this.triggers
      .filter((x: any) => x._element.nativeElement.dataset.level >= level && x !== trigger)
      .forEach(x => x.closeMenu());
    trigger.openMenu();
  }

  closeMenu() {
    this.triggers.forEach(x => x.closeMenu());
  }
}
