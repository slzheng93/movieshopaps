import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/shared/models/Movie';
import { MovieCard } from 'src/app/shared/models/MovieCard';
import { Cast } from 'src/app/shared/models/Cast';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //private readonly HttpClient _httpClient
  constructor(private http: HttpClient) { }

  //HttpClient to make the API call, comes from HttpClientModule

  //HomeComponent is gonna call this method
  getTopGrossingMovies():Observable<MovieCard[]>{
    
    // call the API URL using HttpClient class
    return this.http.get<MovieCard[]>(`${environment.apiBaseUrl}Movies/toprevenue`);
  }
  getMovieDetails(id: number): Observable<Movie> {
    // get movie detail base on the movie id
    return this.http.get<Movie>(`${environment.apiBaseUrl}movies/${id}`);

  }
  getCastDeatil(id: number): Observable<Cast>{
    // return cast detail base on the cast id
    return this.http.get<Cast>(`${environment.apiBaseUrl}Cast/${id}`);
  }
  getMovieByGenre(id: number): Observable<Genre>{
    // return movies base on their genre
    return this.http.get<Genre>(`${environment.apiBaseUrl}Movies/genre/${id}`);
  }
}
