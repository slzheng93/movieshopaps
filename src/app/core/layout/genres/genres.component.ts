import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/shared/models/Genre';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})


export class GenresComponent implements OnInit {

  genre!: Genre[];
  
  constructor(private genreService:GenreService) { }

  ngOnInit(): void {
    this.genreService.getAllGenres().subscribe(
      g => {
        this.genre = g;
      }
    )
  }
  

}
