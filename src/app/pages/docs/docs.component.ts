import { Component } from '@angular/core';
import { ConnectedPositionStrategy, MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocumentationComponent {
  model = {'id': 18,
      'name': 'Dr IQ'
    };

  currentDrink: string;
  currentDrink1: string;
  favoriteColor: string;

  drinks = [
    {value: null, viewValue: 'None'},
    {value: 'coke-0', viewValue: 'Coke'},
    {value: 'water-1', viewValue: 'Water'},
    {value: 'pepper-2', viewValue: 'Dr. Pepper', disabled: true},
    {value: 'coffee-3', viewValue: 'Coffee'},
    {value: 'tea-4', viewValue: 'Tea'},
  ];

  colors = [
    {value: null, viewValue: 'None'},
    {value: 'red-0', viewValue: 'Red'},
    {value: 'green-1', viewValue: 'Green'},
    {value: 'blue-2', viewValue: 'Blue'}
  ];
}
