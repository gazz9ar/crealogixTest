import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './people.component';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
	{
		path:'',
		component:PeopleHomeComponent,
	},	
	{
		path:':personId',
		component:PeopleDetailComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
