import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

	private apiUrl:string = environment.url;

  constructor(private http:HttpClient) { }

  public getPeople(): Observable<any> {
	return this.http.get<any>(this.apiUrl + '/people');
  }

  public getPerson(personId:number): Observable<any> {
	return this.http.get<any>(this.apiUrl + '/people/' + personId);
  }

}
