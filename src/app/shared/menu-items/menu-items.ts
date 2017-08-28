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
   //   {state: 'cards', name: 'CARDS'},
      {state: 'typography', name: 'Typography'},
      {state: 'select', name: 'SELECT'},
   //   {state: 'selectpopover', name: 'Select Popover'},
      {state: 'selectcustom', name: 'Select Custom'},
      {state: 'autocomplete', name: 'AUTOCOMPLETE'},
      {state: 'inputoptions', name: 'Input Options'},
      {state: 'chips', name: 'CHIPS'},
      {state: 'input', name: 'INPUT'},
      {state: 'checkbox', name: 'CHECKBOX'},
      {state: 'radio', name: 'RADIO'},
      {state: 'toolbar', name: 'TOOLBAR'},
   //   {state: 'lists', name: 'LISTS'},
   //   {state: 'grid', name: 'GRID'},
   //   {state: 'progress', name: 'PROGRESS'},
      {state: 'tabs', name: 'TABS'},
      {state: 'switch', name: 'SWITCH'},
      {state: 'tooltip', name: 'TOOLTIP'},
      {state: 'menu', name: 'MENU'},
    //  {state: 'menucustom', name: 'Nested Menu'},
   //   {state: 'slider', name: 'SLIDER'},
      {state: 'sliderpanel', name: 'Slider Panel'},
      {state: 'alerts', name: 'Alerts'},
      {state: 'snackbar', name: 'SNACKBAR'},
      {state: 'dialog', name: 'DIALOG'},
      {state: 'dialogcustom', name: 'Dialog Custom'}
    ]
  },

  {
    state: 'session',
    name: 'Session Layouts',
    type: 'sub',
    icon: 'face',
    children: [
      {state: '404', name: '404'},
     {state: 'error', name: 'ERROR'},
      {state: 'signin', name: 'Sign In'},
      {state: 'signup', name: 'SIGNUP'},
      {state: 'forgot', name: 'FORGOT'},
      {state: 'lockscreen', name: 'LOCKSCREEN'},
    ]
  },


  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'pages',
    children: [
      {state: 'wijmotable', name: 'Wijmo Table'},
      {state: 'wijmogrid', name: 'Wijmo Grid'},
      {state: 'docs', name: 'Documentation'},
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
