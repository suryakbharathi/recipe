import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceipeHomeComponent } from './receipe-home.component';
import { ReceipesRoutingModule } from './receipe-home-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ReceipeHomeComponent ],
  imports: [
    CommonModule,
    ReceipesRoutingModule,
    FormsModule
  ]
})
export class ReceipeHomeModule { }
