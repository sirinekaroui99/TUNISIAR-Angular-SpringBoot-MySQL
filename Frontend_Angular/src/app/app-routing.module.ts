import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { HomeComponent } from './home/home.component';
import { AjoutVolsComponent } from './boitesDialogue/ajout-vols/ajout-vols.component';

const routes: Routes = [
  {
    path: 'home', component : HomeComponent
  },
  {
    path: 'ajout', component : AjoutVolsComponent
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./demo/dashboard/dashboard.component'),
      },
      {
        path: 'basic',
        loadChildren: () =>
          import('./demo/ui-elements/ui-basic/ui-basic.module').then(
            (m) => m.UiBasicModule
          ),
      },
      
      {
        path: 'tables',
        loadChildren: () =>
          import('./demo/pages/tables/tables.module').then(
            (m) => m.TablesModule
          ),
      },
      {
        path: 'modals',
        loadChildren: () =>
          import('./boitesDialogue/ajout-vols/ajout-vols.component').then(
            
          ),
      },
       
      
    ],
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
