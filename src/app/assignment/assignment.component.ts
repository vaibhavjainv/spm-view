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
  formData = { "projects": [{ "rate": "", "role": "", "account": "", "assignment": "" }] };
  index = 0;

  constructor(private resourcesService: ResourcesService) { }

  findVal(value) {
    if (value > 0) {
      return value;
    } else {
      return 0;
    }
  }

  addPrevWeek(in_assignment) {
    var prevWeek = new Date(in_assignment.startWeek);
    prevWeek.setDate(prevWeek.getDate() - 7);
    this.updateAlloc(in_assignment.resources[0].id,
      0,
      in_assignment.name,
      in_assignment.account,
      in_assignment.resources[0].rate,
      in_assignment.resources[0].role,
      prevWeek.toDateString());
  }

  addNextWeek(in_assignment) {
    var nextWeek = new Date(in_assignment.endWeek);
    nextWeek.setDate(nextWeek.getDate() + 7);
    this.updateAlloc(in_assignment.resources[0].id,
      0,
      in_assignment.name,
      in_assignment.account,
      in_assignment.resources[0].rate,
      in_assignment.resources[0].role,
      nextWeek.toDateString());
  }

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

    this.formData = { "projects": [{ "rate": "", "role": "", "account": "", "assignment": "" }] };

  }

  deleteResource(id) {
    this.resourcesService.deleteResource(id)
      .subscribe(resp => this.assignments = resp);
  }

  removeAllocation(id, assignment) {
    var data = {};
    data["id"] = id;
    data["assignment"] = assignment.name;
    data["account"] = assignment.account;

    this.resourcesService.removeAllocation(data)
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

    this.assignments["assignments"].forEach(assignment => {
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
