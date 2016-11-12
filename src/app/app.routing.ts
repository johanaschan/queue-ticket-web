import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { LoginComponent } from './login';
import { AuthGuardAdmin, AuthGuardCustomer,AuthGuardLoggedIn } from './security';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent,canActivate:[AuthGuardLoggedIn], children:
          [
            {path: 'customer', component: CustomerComponent, canActivate: [AuthGuardCustomer]},
            {path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin]},
            {path: '', redirectTo: 'admin', pathMatch: 'full'}
          ]
   },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
