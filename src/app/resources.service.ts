import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Resource } from './resource' 
import { Assignment } from './assignment' 

import { print } from 'util';

import { environment } from '../environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class ResourcesService {

  private getall = 'http://'+environment.spmapihost+'/api/resources/getall';
  private getallassignmentsURL = 'http://'+environment.spmapihost+'/api/assignments/getall';
  private addResourceURL = 'http://'+environment.spmapihost+'/api/resources/add';
  private delResourceURL = 'http://'+environment.spmapihost+'/api/resources/delete';
  private updateAllocURL = 'http://'+environment.spmapihost+'/api/resources/updateallocation';
  private updateSeqURL = 'http://'+environment.spmapihost+'/api/resources/updatesequence';
  private removeAllocationURL = 'http://'+environment.spmapihost+'/api/resources/removeallocation';
  private getResourceInfoURL = 'http://'+environment.spmapihost+'/api/resources/getdetails';

  
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

  updateAlloc(formData): Observable<Assignment[]> {
    return this.http.put<Assignment[]>(this.updateAllocURL,formData,httpOptions);
  }

  deleteResource(id): Observable<Assignment[]> {
    const url = `${this.delResourceURL}/${id}`;
    return this.http.delete<Assignment[]>(url,httpOptions);
  }

  removeAllocation(data): Observable<Assignment[]> {
    return this.http.put<Assignment[]>(this.removeAllocationURL,data,httpOptions);
  }

  getResourceDetails(id): Observable<{}> {
    const url = `${this.getResourceInfoURL}/${id}`;
    return this.http.get(url);
  }
  
  updatesequence(data): Observable<{}> {
    return this.http.put<Assignment[]>(this.updateSeqURL,data,httpOptions);

  }

}


