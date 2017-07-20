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
  sbType = 'success';
  dismissible = false;

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
      duration: number = 3000,
      classes: string[] = [this.sbType]
    ){
      let snackbarRef = this.snackBar.open(message, action, {
                          duration: duration,
                          extraClasses: this.dismissible ? classes.concat('snackbar', 'close') : classes.concat('snackbar')
                        });
      if(snackbarRef.containerInstance.snackBarConfig.extraClasses.includes('close')) {
        let elem = document.getElementsByTagName('snack-bar-container');
        let sbElem = elem[elem.length - 1].getElementsByTagName('simple-snack-bar')[0];
        let buttonNode = document.createElement("button");
        buttonNode.className = "mat-simple-snackbar-action close";
        buttonNode.onclick = function() {snackbarRef.dismiss();}
        let textnode = document.createTextNode("close");
        buttonNode.appendChild(textnode);
        sbElem.appendChild(buttonNode);
      }
  }
}

