import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListModule } from 'item-list';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ListService } from 'projects/demo/services/list.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ItemListModule,
    SharedModule,
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
