import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { LoginComponent } from './login';
import { CurrentTicketComponent } from './shared/current-ticket';
import { PrettyTimePipe } from './shared/pipes';
import { LocalStorageService, TicketService, WebsocketService } from './shared/services';
import { AuthService, AuthGuardAdmin, AuthGuardCustomer, AuthGuardLoggedIn, UserService } from './shared/security';
import { routing, appRoutingProviders }  from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AdminComponent,
    CustomerComponent,
    LoginComponent,
    CurrentTicketComponent,
    PrettyTimePipe,
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
    UserService,
    AuthService,
    AuthGuardAdmin,
    AuthGuardCustomer,
    AuthGuardLoggedIn,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
