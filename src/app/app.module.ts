import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { LoginComponent } from './login';
import { CurrentTicketComponent } from './shared/current-ticket';
import { PrettyTimePipe } from './shared/pipes';
import { LocalStorageService, TicketService, UserService, WebsocketService } from './shared/services';
import { AuthenticationService} from './security';
import { routing, appRoutingProviders }  from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    CustomerComponent,
    LoginComponent,
    CurrentTicketComponent,
    PrettyTimePipe
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
    AuthenticationService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
