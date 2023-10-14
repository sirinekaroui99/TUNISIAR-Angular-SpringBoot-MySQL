import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vols',
        loadComponent: () => import('./basic-badge/basic-badge.component'),
      },
      {
        path: 'hotesses',
        loadComponent: () => import('./basic-button/basic-button.component'),
      },
       
      {
        path: 'pilotes',
        loadComponent: () =>
          import('./basic-collapse/basic-collapse.component'),
      },
      {
        path: 'co-pilotes',
        loadComponent: () =>
          import('./basic-tabs-pills/basic-tabs-pills.component'),
      },
      {
        path: 'stewards',
        loadComponent: () =>
          import('./basic-typography/basic-typography.component'),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiBasicRoutingModule {}
