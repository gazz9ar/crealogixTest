import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

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
