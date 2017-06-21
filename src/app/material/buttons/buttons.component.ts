import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  private open1: boolean = false;
  private open2: boolean = false;
  private openf1: boolean = false;
  private openf2: boolean = false;
  constructor() { }
}
