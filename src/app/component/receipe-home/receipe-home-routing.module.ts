import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipeHomeComponent } from './receipe-home.component';

const routes: Routes = [
  {
    path: '',
    component: ReceipeHomeComponent,
  },
  {
    path: 'details',
    loadChildren: () => import('../receipe-details/receipe-details.module').then(m => m.ReceipeDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipesRoutingModule { }
