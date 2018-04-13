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

  updateAlloc(id, hours, assignmentname, account, rate, role, week) {
    var updateObj = {};
    updateObj["id"] = id;

    var projects = [];
    var project = {};

    project["account"] = account;
    project["assignment"] = assignmentname;
    project["rate"] = rate;
    project["role"] = role;

    var allocations = [];
    var allocation = {};

    allocation["week"] = week;
    allocation["hours"] = hours;

    allocations.push(allocation);

    this.assignments.forEach(assignment => {
      if (assignment.name == assignmentname && assignment.account == account) {
        assignment.resources.forEach(inneres => {
          if (inneres["id"] == id) {
            for (var existingAlloc in inneres.allocation) {
              var allocation = {};
              if (week != existingAlloc) {
                allocation["week"] = existingAlloc;
                allocation["hours"] = inneres.allocation[existingAlloc];
                allocations.push(allocation);
              }
            }
          }

        });
      }
    });


    project["allocation"] = allocations;

    projects.push(project);

    updateObj["projects"] = projects;

    this.resourcesService.updateAlloc(updateObj)
      .subscribe(resp => this.assignments = resp);
  }

}
