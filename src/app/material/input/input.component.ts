import { Component } from '@angular/core';

let max = 5;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  model = {'id': 18,
            'name': 'Dr IQ'
          };

  constructor() {}
}
