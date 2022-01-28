import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Cast } from 'src/app/shared/models/Cast';
import { CastDetail } from 'src/app/shared/models/CastDetails';

@Component({
  selector: 'app-cast-details',
  templateUrl: './cast-details.component.html',
  styleUrls: ['./cast-details.component.css']
})
export class CastDetailsComponent implements OnInit {

  cast!:CastDetail;

  constructor(private activeRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      p => {
        const id = Number(p.get('id'));

        this.movieService.getCastDeatil(id).subscribe(
          c => {
            this.cast = c;
          }
        )
      }
    )
  }

}