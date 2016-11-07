import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { LoginComponent } from './login';
import { AdminAuthGuard, CustomerAuthGuard } from './security';


const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AdminAuthGuard]},
  {path: 'customer', component: CustomerComponent, canActivate: [CustomerAuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/admin', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
