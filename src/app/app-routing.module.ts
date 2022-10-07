import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InProgressComponent } from './shared/inProgress/in-progress.component';

const routes: Routes = [
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'films',
		loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule),	
	},
	{
		path:'people',
		loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule),	
	},
	{
		path:'planets',
		component:InProgressComponent
	},
	{
		path:'species',
		component:InProgressComponent
	},
	{
		path:'starships',
		component:InProgressComponent
	},
	{
		path:'**',
		redirectTo:'home',
		pathMatch:'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
