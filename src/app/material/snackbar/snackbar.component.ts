import { Component } from '@angular/core';
import { MdSnackBar, MdSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {
  dismissible:boolean = false;
  sbType:string = 'success';

  constructor(
    public snackBar: MdSnackBar
  ) {}

  openSnackBar(
      message: string,
      action: string = "",
      duration: number = 3000,
      dismissible: boolean = false,
      classes: string[] = []
    ){
      let snackbarRef = this.snackBar.open(message, action, {
                          duration: duration,
                          extraClasses: dismissible ? classes.concat('snackbar', 'close') : classes.concat('snackbar')
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

