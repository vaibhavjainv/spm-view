import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Resource } from './resource' 
import { Assignment } from './assignment' 

import { print } from 'util';


@Injectable()
export class ResourcesService {

  private getall = 'http://localhost:3000/api/resources/getall';
  private getallassignmentsURL = 'http://localhost:3000/api/assignments/getall';
  
  constructor(private http: HttpClient) { }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.getall);
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.getallassignmentsURL);
  }
}


