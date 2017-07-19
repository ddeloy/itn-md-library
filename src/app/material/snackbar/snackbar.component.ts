import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  message = 'Snack Bar opened.';
  actionButtonLabel = 'Retry';
  action = false;
  setAutoHide = false;
  autoHide = 100000;
  addExtraClass = false;
  snackbarRef: any;
  

  constructor(
    public snackBar: MdSnackBar
  ) {}

  open() {
    const config = new MdSnackBarConfig();
    config.duration = this.autoHide;
    config.extraClasses = this.addExtraClass ? ['party'] : null;
    this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
  }

  openSnackBar(
      message: string,
      action: string,
      duration: number = 2000,
      classes: string[] = ['success', 'system']
    ){
      this.snackbarRef = this.snackBar.open(message, action, {
                      duration: duration,
                      extraClasses: ['snackbar'].concat(classes),
                    });
                    (<any>window).sbref = this.snackbarRef;
      if(this.snackbarRef.containerInstance.snackBarConfig.extraClasses.includes('feedback')) {
        let elem = document.getElementsByTagName('snack-bar-container')[0];
        let sbElem = elem.getElementsByTagName('simple-snack-bar')[0];
        let spanNode = document.createElement("SPAN");
        spanNode.className = "close";
        let textnode = document.createTextNode("close");
        spanNode.appendChild(textnode);
        sbElem.appendChild(spanNode);
      }
  }
}

