import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Resource } from './resource' 
import { Assignment } from './assignment' 

import { print } from 'util';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ResourcesService {

  private getall = 'http://localhost:3000/api/resources/getall';
  private getallassignmentsURL = 'http://localhost:3000/api/assignments/getall';
  private addResourceURL = 'http://localhost:3000/api/resources/add';
  private delResourceURL = 'http://localhost:3000/api/resources/delete';
  
  constructor(private http: HttpClient) { }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.getall);
  }

  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.getallassignmentsURL);
  }

  addResource(formData): Observable<Assignment[]> {
    return this.http.post<Assignment[]>(this.addResourceURL,formData,httpOptions);
  }

  deleteResource(id): Observable<Assignment[]> {
    const url = `${this.delResourceURL}/${id}`;
    return this.http.delete<Assignment[]>(url,httpOptions);
  }

}


