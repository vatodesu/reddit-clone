import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebsiteGridComponent } from './website-grid/website-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
