import { Routes } from '@angular/router';

import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import { DocumentationComponent } from './docs/docs.component';


export const PagesRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'wijmo',
      component: WijmoTableComponent
    }, {
      path: 'docs',
      component: DocumentationComponent
    }, {
    }]
  }
];
