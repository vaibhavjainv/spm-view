import { Component, OnInit } from '@angular/core';

import { ResourcesService } from '../resources.service';

import { Resource } from '../resource' 


@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  resources: Resource[];
  blue = "Green";

  constructor(private resourcesService: ResourcesService) { }

  getResources(): void {
    this.resourcesService.getResources()
        .subscribe(resp => this.resources = resp);
}




  ngOnInit() {
    this.getResources();
  }

}
