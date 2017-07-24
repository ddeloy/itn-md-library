import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MdSelectChange} from '@angular/material';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
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
