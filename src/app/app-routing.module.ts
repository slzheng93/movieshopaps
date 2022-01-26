import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CastDetailsComponent } from './public/cast-details/cast-details.component';
import { MovieDetailsComponent } from './public/movie-details/movie-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'cast/:id', component: CastDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
