import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MdIconModule,
  MdCardModule,
  MdInputModule,
  MdButtonModule,
  MdToolbarModule,
  MdTabsModule,
  MdListModule,
  MdSlideToggleModule,
  MdSelectModule,
  MdMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PagesRoutes } from './pages.routing';
import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import { DocumentationComponent } from './docs/docs.component';

import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {WjCoreModule} from 'wijmo/wijmo.angular2.core';
import {WjGridFilterModule} from "wijmo/wijmo.angular2.grid.filter";
import {DataSvc} from 'app/pages/services/DataSvc';
import {FormattedModelAccessor} from './directives/FormattedModelAccessor';
import {NumberInputAccessor} from './directives/NumberInputAccessor';
import {GlobalizePipe} from './pipes/appPipes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    MdIconModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdListModule,
    MdSlideToggleModule,
    MdSelectModule,
    MdMenuModule,
    FlexLayoutModule,
    FormsModule,
    WjInputModule,
    WjGridModule,
    WjCoreModule,
    WjGridFilterModule
  ],
  declarations: [
    WijmoTableComponent,
    DocumentationComponent,
    GlobalizePipe,
    FormattedModelAccessor,
    NumberInputAccessor
  ],
  providers: [DataSvc],
})

export class PagesModule {}
