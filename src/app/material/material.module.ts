import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {
  FullscreenOverlayContainer,
  MaterialModule,
  MdNativeDateModule,
  MdSelectionModule,
  OverlayContainer
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';
import { InputComponent } from './input/input.component';
import { CheckboxComponent, MdCheckboxDemoNestedChecklistComponent } from './checkbox/checkbox.component';
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
import { DialogComponent} from './dialog/dialog.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ChipsComponent } from './chips/chips.component';
import { DatepickerComponent } from './datepicker/datepicker.component';

import { JazzDialogComponent, ContentElementDialog, IFrameDialog } from './dialog/dialog.component';
import {TopMenuComponent} from './menu/top-menu/top-menu.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavItemComponent } from './sidenav/sidenav-item/sidenav-item.component';
import {CustomDialogComponent, DialogCustomComponent} from "./dialogcustom/dialog-custom.component";
import { TypographyComponent } from './typography/typography.component';
import { MenuCustomComponent } from './menu-custom/menu-custom.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SelectPopoverComponent, OptFilterPipe } from './select-popover/select-popover.component';
import { SelectCustomComponent } from './select-custom/select-custom.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    MdNativeDateModule,
    MdSelectionModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ],
  declarations: [
    ButtonsComponent,
    CardsComponent,
    InputComponent,
    CheckboxComponent,
    MdCheckboxDemoNestedChecklistComponent,
    RadioComponent,
    ToolbarComponent,
    ListsComponent,
    GridComponent,
    ProgressComponent,
    TabsComponent,
    ToggleComponent,
    TooltipComponent,
    MenuComponent,
    SliderComponent,
    SnackbarComponent,
    SelectComponent,
    AutocompleteComponent,
    ChipsComponent,
    DatepickerComponent,
    DialogComponent,
    JazzDialogComponent,
    ContentElementDialog,
    IFrameDialog,
    DialogCustomComponent,
    CustomDialogComponent,
    TopMenuComponent,
    SidenavComponent,
    SidenavItemComponent,
    TypographyComponent,
    MenuCustomComponent,
    AlertsComponent,
    SelectPopoverComponent,
    OptFilterPipe,
    SelectCustomComponent
  ],
  entryComponents: [ JazzDialogComponent, ContentElementDialog, IFrameDialog, CustomDialogComponent ],
})

export class MaterialComponentsModule {}
