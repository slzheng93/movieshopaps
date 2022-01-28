import { Component, OnInit } from '@angular/core';
import { GenreService } from '../core/services/genre.service';
import { MovieService } from '../core/services/movie.service';
import { Genre } from '../shared/models/Genre';
import { MovieCard } from "../shared/models/MovieCard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService:MovieService, private genreService:GenreService) { }

  movieCards!:MovieCard[];
  genre!: Genre[];
  //HomeComponent will MoviesService with DI
  //ngOnInit() is one of the important lifecycle hooks methods
  ngOnInit(): void {
    //use to call the API
      this.movieService.getTopGrossingMovies().subscribe(
        
        //we need to initalize our data object
        m =>{
          this.movieCards = m;
          // console.log(`inside the home component OnInit method`);
          // console.table(this.movieCards);
        }
      )
      this.genreService.getAllGenres().subscribe(
        g => {
          this.genre = g;
        }
      )
  }

}
