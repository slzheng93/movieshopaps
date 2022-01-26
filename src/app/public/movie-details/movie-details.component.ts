import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!: Movie;

  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    // ActivatedRoute That will give us all the information about current Route
    // Get the moive id from the URL and call the movie service to get movie details
    this.activeRoute.paramMap.subscribe(
      p => {
        const id = Number(p.get('id'));
        // console.log(`inside Movie Details Component`);
        // console.log(`MovieId is:` + id);

        this.movieService.getMovieDetails(id).subscribe(
          m =>{
            this.movie = m;
            // console.log(this.movie);
          }
        )
      }
    )
  }

}
