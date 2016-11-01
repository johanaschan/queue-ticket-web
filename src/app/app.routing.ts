import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin';
import { CustomerComponent } from './customer';
import { LoginComponent } from './login';
import { AuthGuard } from './security';


const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  {path: '', redirectTo: '/admin', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
