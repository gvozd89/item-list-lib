import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListModule } from 'item-list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
