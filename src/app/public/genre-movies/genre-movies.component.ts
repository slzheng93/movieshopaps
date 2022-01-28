import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/Movie';
import { MovieCard } from 'src/app/shared/models/MovieCard';


@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.css']
})
export class GenreMoviesComponent implements OnInit {

  movieCards!:MovieCard[];

  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {

    this.activeRoute.paramMap.subscribe(
      p => {
        const id = Number(p.get('id'));

        this.movieService.getMovieByGenre(id).subscribe(
          m => {
            this.movieCards = m;
            console.table(m);
          }
        )
      }
    )
      
    
    
  }

}
// this.activeRoute.paramMap.subscribe(
//   p => {
//     const id = Number(p.get('id'));
//     // console.log(`inside Movie Details Component`);
//     // console.log(`MovieId is:` + id);

//     this.movieService.getMovieDetails(id).subscribe(
//       m =>{
//         this.movie = m;
//         // console.log(this.movie);
//       }
//     )
//   }
// )