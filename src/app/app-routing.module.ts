import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentComponent }      from './assignment/assignment.component';

const routes: Routes = [
  { path: 'assignment', component: AssignmentComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}