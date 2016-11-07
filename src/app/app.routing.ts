import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { LoginComponent } from './login';
import { AuthGuardAdmin, AuthGuardCustomer } from './security';


const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin]},
  {path: 'customer', component: CustomerComponent, canActivate: [AuthGuardCustomer]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/admin', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
