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
  MdSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { PagesRoutes } from './pages.routing';
import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import { DocumentationComponent } from './docs/docs.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EditComponent } from './edit/edit.component';
import { PricingComponent } from './pricing/pricing.component';

import {WjGridModule} from 'wijmo/wijmo.angular2.grid';
import {WjInputModule} from 'wijmo/wijmo.angular2.input';
import {WjCoreModule} from 'wijmo/wijmo.angular2.core';
import * as wjcCore from 'wijmo/wijmo';
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
    FlexLayoutModule,
    FormsModule,
    NgxDatatableModule,
    WjInputModule,
    WjGridModule,
    WjCoreModule,
  ],
  declarations: [
    WijmoTableComponent,
    DocumentationComponent,
    TimelineComponent,
    EditComponent,
    PricingComponent,
    GlobalizePipe,
    FormattedModelAccessor,
    NumberInputAccessor
  ],
  providers: [DataSvc],
})

export class PagesModule {}
