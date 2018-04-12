import { Component, OnInit } from '@angular/core';

import { ResourcesService } from '../resources.service';

import { Resource } from '../resource'
import { Assignment } from '../assignment';


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  assignments: Assignment[];
  blue = "Green";
  formData = { "projects": [{ "rate": "", "role": "", "account": "ABC", "assignment": "XYZ" }] };

  constructor(private resourcesService: ResourcesService) { }

  getResources(): void {
    this.resourcesService.getAssignments()
      .subscribe(resp => this.assignments = resp);
  }

  ngOnInit() {
    this.getResources();
  }

  onSubmit() {
    this.resourcesService.addResource(this.formData)
      .subscribe(resp => this.assignments = resp);
  }

  deleteResource(id) {
    this.resourcesService.deleteResource(id)
      .subscribe(resp => this.assignments = resp);
  }

}
