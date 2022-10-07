import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './people.component';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PersonHeightPipe } from './shared/pipes/person-height.pipe';


@NgModule({
  declarations: [
    PeopleComponent,
    PeopleHomeComponent,
    PeopleDetailComponent,
    PersonHeightPipe
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
