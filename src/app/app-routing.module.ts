import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentComponent } from './assignment/assignment.component';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';

const routes: Routes = [
  { path: 'assignment', component: AssignmentComponent },
  { path: 'resource-details/:id', component: ResourceDetailsComponent },
  { path: 'resource-details', component: ResourceDetailsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }