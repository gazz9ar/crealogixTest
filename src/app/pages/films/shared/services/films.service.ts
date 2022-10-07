import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { swApiResponse } from '../../../../shared/models/swApiResponse';
import { Film } from '../models/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

	private apiUrl:string = environment.url;

  constructor(private http:HttpClient) { }

  public getFilms(): Observable<swApiResponse> {
	return this.http.get<swApiResponse>(this.apiUrl + '/films');
  }

  public getFilm(filmId:number): Observable<Film> {
	return this.http.get<Film>(this.apiUrl + '/films/' + filmId);
  }
}
