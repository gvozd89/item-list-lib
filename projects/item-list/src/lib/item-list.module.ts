import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ItemListComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    ItemListComponent
  ]
})
export class ItemListModule { }
