import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdherantComponent } from './adherant/adherant.component';
import { ReservationComponent } from './reservation/reservation.component';
import { TerrainComponent } from './terrain/terrain.component';
import { AddAdherantComponent } from './add-adherant/add-adherant.component';
import { AddResComponent } from './add-res/add-res.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    AdherantComponent,
    ReservationComponent,
    TerrainComponent,
    AddAdherantComponent,
    AddResComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    provideClientHydration(), provideHttpClient() ,AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
