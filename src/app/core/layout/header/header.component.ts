import { Component, OnInit } from '@angular/core';
import { GenreService } from '../../services/genre.service';
import { Genre } from 'src/app/shared/models/Genre';
import { GenresComponent } from '../genres/genres.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres!: Genre[];

  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(
      g => {
        this.genres = g;
      }
    )
  }

}
