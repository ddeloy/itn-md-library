import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'material',
    name: 'MATERIAL',
    type: 'sub',
    icon: 'equalizer',
    children: [
      {state: 'button', name: 'BUTTON'},
      {state: 'cards', name: 'CARDS'},
      {state: 'select', name: 'SELECT'},
      {state: 'autocomplete', name: 'AUTOCOMPLETE'},
      {state: 'datepicker', name: 'DATEPICKER'},
      {state: 'chips', name: 'CHIPS'},
      {state: 'input', name: 'INPUT'},
      {state: 'checkbox', name: 'CHECKBOX'},
      {state: 'radio', name: 'RADIO'},
      {state: 'toolbar', name: 'TOOLBAR'},
      {state: 'lists', name: 'LISTS'},
      {state: 'grid', name: 'GRID'},
      {state: 'progress', name: 'PROGRESS'},
      {state: 'tabs', name: 'TABS'},
      {state: 'switch', name: 'SWITCH'},
      {state: 'tooltip', name: 'TOOLTIP'},
      {state: 'menu', name: 'MENU'},
      {state: 'slider', name: 'SLIDER'},
      {state: 'snackbar', name: 'SNACKBAR'},
      {state: 'dialog', name: 'DIALOG'}
    ]
  },
  {
    state: 'tables',
    name: 'TABLES',
    type: 'sub',
    icon: 'format_line_spacing',
   /* badge: [
      {type: 'blue-grey', value: '8'
      }
    ], */
    children: [
      {state: 'fullscreen', name: 'FULLSCREEN'},
      {state: 'editing', name: 'EDITING'},
      {state: 'filter', name: 'FILTER'},
      {state: 'paging', name: 'PAGING'},
      {state: 'sorting', name: 'SORTING'},
      {state: 'pinning', name: 'PINNING'},
      {state: 'selection', name: 'SELECTION'},
    ]
  },

  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'pages',
    children: [
       {state: 'blank', name: 'BLANK'},
      ]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
