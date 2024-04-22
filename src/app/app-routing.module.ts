import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { authGuardGuard } from './auth-guard.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarproduComponent } from './components/dashboard/agregarprodu/agregarprodu.component';
import { VerComponent } from './components/dashboard/ver/ver.component';
import { ActualizarComponent } from './components/dashboard/actualizar/actualizar.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuardGuard]},

  {path: 'reportes', component: ReportesComponent},
  { path: 'agregarprodu', component: AgregarproduComponent  },
  {path: 'actualizar/:id', component: ActualizarComponent},
  { path: 'ver/:id', component: VerComponent},
  {path: '**', component: PagenotfoundComponent},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
