import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { InProgressComponent } from './inProgress/in-progress.component';



@NgModule({
  declarations: [
	NavbarComponent,
 InProgressComponent
  ],
  imports: [
    CommonModule,
	RouterModule
  ],
  exports: [
	NavbarComponent
  ]
})
export class SharedModule { }
