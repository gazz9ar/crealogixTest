import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../shared/services/people.service';
import { Observable, map, finalize } from 'rxjs';
import { Person } from '../shared/models/Person';

@Component({
  selector: 'app-people-home',
  templateUrl: './people-home.component.html',
  styleUrls: ['./people-home.component.scss']
})
export class PeopleHomeComponent implements OnInit {

	public people$?:Observable<Person[]>;
	public isLoading:boolean = false;

  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
	this.getPeople();
  }
  
  getPeople(): void {
	this.isLoading = true;
	this.people$ = this.peopleService.getPeople()
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
