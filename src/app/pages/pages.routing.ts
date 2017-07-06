import { Routes } from '@angular/router';

import { WijmoTableComponent } from './wijmo/wijmo.table.component';
import { DocumentationComponent } from './invoice/invoice.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EditComponent } from './edit/edit.component';
import { PricingComponent } from './pricing/pricing.component';

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
      path: 'timeline',
      component: TimelineComponent
    }, {
      path: 'user',
      component: EditComponent
    }, {
      path: 'pricing',
      component: PricingComponent
    }]
  }
];
