import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MdSelectChange} from '@angular/material';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  drinksRequired = false;
  pokemonRequired = false;
  drinksDisabled = false;
  pokemonDisabled = false;
  showSelect = false;
  currentDrink: string;
  currentDrink1: string;
  favDrink: string;
  favFood: string;
  favoriteColor: string;
  currentPokemon: string[];
  latestChangeEvent: MdSelectChange;
  floatPlaceholder = 'never';
  foodControl = new FormControl('pizza-1');
  drinksTheme = 'primary';
  pokemonTheme = 'primary';
  popoverShown: boolean = false;

  selectPopoverStatus:string = "No access";

  favSports: string[] = [];

  sports = [
    {value: 'cricket-0', viewValue: 'Cricket'},
    {value: 'football-1', viewValue: 'Football'},
    {value: 'badminton-2', viewValue: 'Badminton'},
    {value: 'basketball-3', viewValue: 'Basketball'},
    {value: 'rugby-4', viewValue: 'Rugby'},
    {value: 'tennis-5', viewValue: 'Tennis'},
    {value: 'hockey-6', viewValue: 'Hockey'},
  ];

  // onSelectChange(event) {
  //   let labelEl = event.source.trigger.nativeElement.parentElement.parentElement;
  //   let overSelTextEl = labelEl.getElementsByClassName('multi-overbox-text')[0];
  //   let multiSelValEl = labelEl.getElementsByClassName('multi-value')[0];
  //   overSelTextEl.innerHTML = (event.value.length > 0) ? ( event.value.length + ' selected' ) : '';
  //   multiSelValEl.innerHTML = event.source.triggerValue;
  // }
  
  options = [{
    text: 'Spinach',
    checked: false
  }, {
    text: 'Cabbage',
    checked: true
  }, {
    text: 'Tomato',
    checked: false
  }, {
    text: 'Orange',
    checked: false
  }, {
    text: 'Apple',
    checked: true
  }, {
    text: 'Mango',
    checked: false
  }]

  updateSelected() {
    let checked:number = 0;
    let checkString: string = '';
    this.options.forEach(option => {
            if(option.checked) {
                checked++;
                if(checked == 1) {
                  checkString = option.text;
                } else {
                  checkString += (', ' + option.text);
                }
            }
        });
    if(checked == 0) {
      this.selectPopoverStatus = 'No access';
    } else {
      this.selectPopoverStatus = checkString;
    }
  } 

  onSelectClose(options) {
    this.options = options;
    this.updateSelected();
  } 

  ngOnInit() {
    this.updateSelected();
  }
  
  foods = [
    {value: null, viewValue: 'None'},
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  colors = [
    {value: null, viewValue: 'None'},
    {value: 'red-0', viewValue: 'Red'},
    {value: 'green-1', viewValue: 'Green'},
    {value: 'blue-2', viewValue: 'Blue'}
  ];

  drinks = [
    {value: null, viewValue: 'None'},
    {value: 'coke-0', viewValue: 'Coke'},
    {value: 'water-1', viewValue: 'Water'},
    {value: 'pepper-2', viewValue: 'Dr. Pepper', disabled: true},
    {value: 'coffee-3', viewValue: 'Coffee'},
    {value: 'tea-4', viewValue: 'Tea'},
  ];

  pokemon = [
    {value: 'bulbasaur-0', viewValue: 'Bulbasaur'},
    {value: 'charizard-1', viewValue: 'Charizard'},
    {value: 'squirtle-2', viewValue: 'Squirtle'},
    {value: 'pikachu-3', viewValue: 'Pikachu'},
    {value: 'eevee-4', viewValue: 'Eevee'},
    {value: 'ditto-5', viewValue: 'Ditto'},
    {value: 'psyduck-6', viewValue: 'Psyduck'},
  ];

  availableThemes = [
    {value: 'primary', name: 'Primary' },
    {value: 'accent', name: 'Accent' },
    {value: 'warn', name: 'Warn' }
  ];

  toggleDisabled() {
    this.foodControl.enabled ? this.foodControl.disable() : this.foodControl.enable();
  }

  setPokemonValue() {
    this.currentPokemon = ['eevee-4', 'psyduck-6'];
  }
}
