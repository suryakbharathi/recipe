import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceipeDetailsRoutingModule } from './receipe-details-routing.module';
import { ReceipeDetailsComponent } from './receipe-details.component';


@NgModule({
  declarations: [ ReceipeDetailsComponent ],
  imports: [
    CommonModule,
    ReceipeDetailsRoutingModule
  ]
})
export class ReceipeDetailsModule { }
