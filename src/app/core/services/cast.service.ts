import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CastDetail } from 'src/app/shared/models/CastDetails';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CastService {

  constructor(private http: HttpClient) { }

getCastDetail() : Observable<CastDetail>{
  return this.http.get<CastDetail>(`${environment.apiBaseUrl}Cast`)
}


  // getAllGenres(): Observable<Genre[]>{

  //   return this.http.get<Genre[]>(`${environment.apiBaseUrl}Genres`);
  // }
}
