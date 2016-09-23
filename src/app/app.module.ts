import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './tickets/admin';
import { CustomerComponent } from './tickets/customer';
import { CurrentComponent } from './tickets/current';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
