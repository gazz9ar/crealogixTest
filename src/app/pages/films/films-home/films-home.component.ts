import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FilmsService } from '../shared/services/films.service';
import { Film } from '../shared/models/Film';
import { Observable, map, finalize } from 'rxjs';

@Component({
  selector: 'app-films-home',
  templateUrl: './films-home.component.html',
  styleUrls: ['./films-home.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FilmsHomeComponent implements OnInit {

	public films$?:Observable<Film[]>;
	public isLoading:boolean = false;

  constructor(private filmsService:FilmsService) { }

  ngOnInit(): void {
	this.getFilms();
  }

  getFilms(): void {
	this.isLoading = true;
	this.films$ = this.filmsService.getFilms()
	.pipe(
		map((apiResponse) => {
			return apiResponse.results;
		}),
		finalize(()=>{
			this.isLoading = false;
		})
	)		
  }


}
