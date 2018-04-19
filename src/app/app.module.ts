import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AppRoutingModule } from './/app-routing.module';

import { ResourcesService } from './resources.service';

import { HttpClientModule } from '@angular/common/http';
import { ResourceDetailsComponent } from './resource-details/resource-details.component';



@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    ResourceDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ResourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
