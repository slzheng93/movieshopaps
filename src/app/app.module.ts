import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './public/movie-details/movie-details.component';
import { CastDetailsComponent } from './public/cast-details/cast-details.component';
import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { GenresComponent } from './core/layout/genres/genres.component';
import { GenreMoviesComponent } from './public/genre-movies/genre-movies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieDetailsComponent,
    CastDetailsComponent,
    MovieCardComponent,
    HeaderComponent,
    GenresComponent,
    GenreMoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
