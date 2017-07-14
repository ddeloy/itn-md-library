import { Component } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent{
  open1 = false;
  open2 = false;
  openf1 = false;
  openf2 = false;
  constructor() { }

  onMenuOpen(trigger: any) {
    let curLeft = Number.parseFloat(trigger._overlayRef.overlayElement.style.left);
    let winWidth = window.innerWidth;
    let curMenuWidth = trigger._overlayRef.overlayElement.clientWidth;
    let curDiff = (curLeft + curMenuWidth) - winWidth;
    if (curDiff > 0) {
      let newLeft = curLeft - curDiff;
      trigger._overlayRef.overlayElement.style.left = newLeft + 'px';
    }
  }

}
