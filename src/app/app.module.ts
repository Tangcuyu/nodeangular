import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
