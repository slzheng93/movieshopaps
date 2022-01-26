import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './public/movie-details/movie-details.component';
import { CastDetailsComponent } from './public/cast-details/cast-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { HeaderComponent } from './core/layout/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    MovieCardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
