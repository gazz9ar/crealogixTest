import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, map, finalize, filter } from 'rxjs';
import { Person } from '../shared/models/Person';
import { PeopleService } from '../shared/services/people.service';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../films/shared/services/films.service';
import { Film } from '../../films/shared/models/Film';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.scss']
})
export class PeopleDetailComponent implements OnInit {

	public person$?:Observable<Person>;
	public personFilms$?:Observable<Film[]>;
	public personFilmsId:number[] = [];
	public isLoading:boolean = false;

  constructor(private peopleService:PeopleService,
	private route:ActivatedRoute,
	private filmsService:FilmsService) { }

  ngOnInit(): void {
	this.getPerson();
  }

  public getPerson(): void {
	this.isLoading = true;
	this.person$ = this.route.params.pipe(
		switchMap( (routeParam) => {					
			return this.peopleService.getPerson(routeParam['personId'])			
			.pipe(			
				finalize(()=>{
					this.isLoading = false;						
				})
			)		
		})
	)	
  }

 
 
}
