import { Routes } from '@angular/router';

import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import { DocumentationComponent } from './docs/docs.component';
import {WijmoGridComponent} from "./wijmo-grid/wijmo.grid.component";


export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'wijmotable',
      component: WijmoTableComponent
    }, {
      path: 'wijmogrid',
      component: WijmoGridComponent
    }, {
      path: 'docs',
      component: DocumentationComponent
    }, {
    }]
  }
];
