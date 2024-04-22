import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReportesComponent } from './components/dashboard/reportes/reportes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VerComponent } from './components/dashboard/ver/ver.component';
import { AgregarproduComponent } from './components/dashboard/agregarprodu/agregarprodu.component';
import { ActualizarComponent } from './components/dashboard/actualizar/actualizar.component';
import { RouterModule } from '@angular/router';
import { FilterPipe } from './filter.pipe';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    ReportesComponent,
    DashboardComponent,
    VerComponent,
    AgregarproduComponent,
    ActualizarComponent,
    FilterPipe,
    HomeComponent,
    PagenotfoundComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
