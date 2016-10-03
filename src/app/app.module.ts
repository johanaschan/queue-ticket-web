import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AdminComponent} from './admin';
import {CustomerComponent} from './customer';
import {CurrentTicketComponent} from './shared/current-ticket';
import {LocalStorageService, TicketService, WebsocketService} from './shared';
import {routing, appRoutingProviders}  from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    CurrentTicketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    LocalStorageService,
    TicketService,
    WebsocketService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
