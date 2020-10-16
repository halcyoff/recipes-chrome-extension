import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { materialModules } from './angular-material-modules';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    HomescreenComponent,
    materialModules
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
