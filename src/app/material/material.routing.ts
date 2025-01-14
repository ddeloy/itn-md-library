import { Routes } from '@angular/router';

import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListsComponent } from './lists/lists.component';
import { GridComponent } from './grid/grid.component';
import { ProgressComponent } from './progress/progress.component';
import { TabsComponent } from './tabs/tabs.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogCustomComponent } from './dialogcustom/dialog-custom.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SidenavComponent } from "./sidenav/sidenav.component";
import {TypographyComponent} from "./typography/typography.component";
import {MenuCustomComponent} from "./menu-custom/menu-custom.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {SelectPopoverComponent} from "./select-popover/select-popover.component";
import {SelectCustomComponent} from "./select-custom/select-custom.component";

export const MaterialRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'button',
      component: ButtonsComponent
    }, {
      path: 'typography',
      component: TypographyComponent
    }, {
      path: 'cards',
      component: CardsComponent
    }, {
      path: 'input',
      component: InputComponent
    }, {
      path: 'checkbox',
      component: CheckboxComponent
    }, {
      path: 'inputoptions',
      component: DatepickerComponent
    }, {
      path: 'radio',
      component: RadioComponent
    }, {
      path: 'toolbar',
      component: ToolbarComponent
    }, {
      path: 'lists',
      component: ListsComponent
    }, {
      path: 'grid',
      component: GridComponent
    }, {
      path: 'progress',
      component: ProgressComponent
    }, {
      path: 'tabs',
      component: TabsComponent
    }, {
      path: 'switch',
      component: ToggleComponent
    }, {
      path: 'tooltip',
      component: TooltipComponent
    }, {
      path: 'menu',
      component: MenuComponent
    }, {
      path: 'menucustom',
      component: MenuCustomComponent
    }, {
      path: 'slider',
      component: SliderComponent
    }, {
      path: 'sliderpanel',
      component: SidenavComponent
    }, {
      path: 'alerts',
      component: AlertsComponent
    }, {
      path: 'snackbar',
      component: SnackbarComponent
    }, {
      path: 'dialog',
      component: DialogComponent
    }, {
      path: 'dialogcustom',
      component: DialogCustomComponent
    }, {
      path: 'select',
      component: SelectComponent
    }, {
  /*    path: 'selectpopover',
      component: SelectPopoverComponent
    }, {*/
      path: 'selectcustom',
      component: SelectCustomComponent
    }, {
      path: 'autocomplete',
      component: AutocompleteComponent
    }, {
      path: 'chips',
      component: ChipsComponent
    }]
  }
];
