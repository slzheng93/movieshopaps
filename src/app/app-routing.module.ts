import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenresComponent } from './core/layout/genres/genres.component';
import { HomeComponent } from './home/home.component';
import { CastDetailsComponent } from './public/cast-details/cast-details.component';
import { GenreMoviesComponent } from './public/genre-movies/genre-movies.component';
import { MovieDetailsComponent } from './public/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'cast/:id', component: CastDetailsComponent },
  { path: 'movies/genre/:id', component: GenreMoviesComponent},

// lazily load the feature module
{
  path:'account', loadChildren: () => import('./account/account.module').then(mod => mod.AccountModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
