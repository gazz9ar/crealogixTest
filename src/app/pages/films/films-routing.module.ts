import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsHomeComponent } from './films-home/films-home.component';

const routes: Routes = [
	{
		path:'',
		component:FilmsHomeComponent,
	},	
	{
		path:':filmId',
		component:FilmDetailComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
