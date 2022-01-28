import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genre } from 'src/app/shared/models/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  
getAllGenres(): Observable<Genre[]>{

  return this.http.get<Genre[]>(`${environment.apiBaseUrl}Genres`);
}
}