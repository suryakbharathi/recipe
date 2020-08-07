import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceipeDetailsComponent } from './receipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: ReceipeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceipeDetailsRoutingModule { }
