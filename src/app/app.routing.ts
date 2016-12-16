import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuardAdmin, AuthGuardCustomer, AuthGuardLoggedIn } from './shared/security';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent, canActivate: [AuthGuardLoggedIn], children:
          [
            {path: 'home', component: HomeComponent, canActivate: [AuthGuardLoggedIn]},
            {path: 'customer', component: CustomerComponent, canActivate: [AuthGuardCustomer]},
            {path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin]},
            {path: '', redirectTo: 'home', pathMatch: 'full'}
          ]
   },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
