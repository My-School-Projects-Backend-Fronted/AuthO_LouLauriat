import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { GaleriesComponent } from './feature/galeries/galeries.component';
import { AuthGuard } from '@auth0/auth0-angular';

export const routes: Routes = [
  {path :'' , redirectTo: 'home',pathMatch:'full'},
  {path : 'home' , component : HomeComponent },
  {path : 'galeries' , component : GaleriesComponent
 },

];
