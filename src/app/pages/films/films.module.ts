import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmsHomeComponent } from './films-home/films-home.component';



@NgModule({
  declarations: [
	FilmsComponent,
 	FilmDetailComponent,
  	FilmsHomeComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
