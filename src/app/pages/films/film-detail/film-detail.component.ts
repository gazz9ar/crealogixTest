import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../shared/services/films.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, Observable, map } from 'rxjs';
import { Film } from '../shared/models/Film';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

	public film$?:Observable<Film>;
	public isLoading:boolean = false;

  constructor(private filmsService:FilmsService,
	private route:ActivatedRoute) { }

  ngOnInit(): void {
	this.getFilm();	
  }

  getFilm(): void {
	this.isLoading = true;
	this.film$ = this.route.params.pipe(
		switchMap( (routeParam) => {					
			return this.filmsService.getFilm(routeParam['filmId'])			
			.pipe(
				map(film => ({
					...film,
					opening_crawl: film.opening_crawl.substring(0,25) + '...'
				})),
				finalize(()=>{
					this.isLoading = false;
				})
			)		
		})
	)
  }

}
