import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent{

  constructor() { }

  // required for assuring menu doesn't go out of screen
  onMenuOpen(trigger: any) {
    let paneEl = undefined;
    let winWidth = window.innerWidth; 

    // overlayRef is included in trigger only if x/yPosition mentioned
    // else containerElement needs to be used
    if(trigger._overlayRef) {
      paneEl = trigger._overlayRef.overlayElement;
    } else {
      let contEl = trigger._overlay._overlayContainer._containerElement;
      paneEl = contEl.getElementsByClassName('cdk-overlay-pane')[0];
    }

    let curLeft = Number.parseFloat(paneEl.style.left);
    let curMenuWidth = paneEl.clientWidth;
    let curDiff = (curLeft + curMenuWidth) - winWidth;
    if (curDiff > 0) {
      let newLeft = curLeft - curDiff;
      paneEl.style.left = newLeft + 'px';
    }
  }

}
