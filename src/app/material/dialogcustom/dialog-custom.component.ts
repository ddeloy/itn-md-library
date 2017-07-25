import {Component} from '@angular/core';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-dialog-custom',
  templateUrl: './dialog-custom.component.html',
  styleUrls: ['./dialog-custom.component.scss'],
})
export class DialogCustomComponent {
  dialogRef: MdDialogRef<CustomDialogComponent>;
  lastCloseResult: string;
  config: MdDialogConfig = {
    disableClose: true,
    width: '75%',
    height: '100%',
    backdropClass:'cdk-overlay-custom-backdrop',// no initial value - picks up default class for basic modal
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };
  constructor(public dialog: MdDialog) {}
  openCustom() {
    this.dialogRef = this.dialog.open(CustomDialogComponent, this.config);
    this.dialogRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }
}

@Component({
  selector: 'app-custom-dialog',
  styles:[``],
  template: `
   <h2 md-dialog-title>I am a custom dialog</h2>
    <md-dialog-content>My configuration options are preset
      <ul>
        <li>Width:75%</li>
        <li>Height: 100%</li>
        <li>disableClose: true (must click on close from dialog</li>
        <li>backdropClass= "cdk-overlay-custom-backdrop". We will be making this the default override for all overlays.</li>
      </ul>
      <p> <strong>{{ customMessage }} </strong></p>
      <p>I haven't figured out a way to have modal go full width in mobile as of yet.</p>
    </md-dialog-content>
    <md-dialog-actions>
        <button md-button [md-dialog-close]="true">Close</button>
    </md-dialog-actions> 
  `
})
export class CustomDialogComponent {
  customMessage = 'I am the message being passed into the dialog';
  constructor(public dialogRef: MdDialogRef <CustomDialogComponent> ) {}
}
