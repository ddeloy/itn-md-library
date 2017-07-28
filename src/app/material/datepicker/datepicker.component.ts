import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {
  touch: boolean;
  filterOdd: boolean;
  yearView: boolean;
  minDate: Date;
  maxDate: Date;
  startAt: Date;
  date: Date;
  dateFilter = (date: Date) => date.getMonth() % 2 === 1 && date.getDate() % 2 === 0;

  currentDrink: string;

  drinks = [
    {value: null, viewValue: 'None'},
    {value: 'coke-0', viewValue: 'Coke'},
    {value: 'water-1', viewValue: 'Water'},
    {value: 'pepper-2', viewValue: 'Dr. Pepper', disabled: true},
    {value: 'coffee-3', viewValue: 'Coffee'},
    {value: 'tea-4', viewValue: 'Tea'},
  ];
}
