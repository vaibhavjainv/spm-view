import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResourcesService } from '../resources.service';


@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {
  resourceid = "";
  resourceInfo = {};

  constructor(private route: ActivatedRoute,
    private resourcesService: ResourcesService,
  ) {
  }

  ngOnInit() {
    this.resourceid = this.route.snapshot.paramMap.get('id');
    this.getResourceDetails();
  }

  getResourceDetails(): void {
    this.resourcesService.getResourceDetails(this.resourceid)
      .subscribe(resp => this.resourceInfo = resp);
  }

  findmatch(project, week) {
    var mapping = project.allocation.filter(allocation => allocation.week == week);
    if (mapping != undefined && mapping.length > 0) {
      return mapping[0].hours;
    } else {
      return 0;
    }
  }

  findtotalhoursforweek(week, totalhoursmap) {
    for (var i in totalhoursmap) {
      var dt = new Date(week);
      var idt = new Date(i);
      console.log("dt value = " + dt.toDateString() + " , idt value =  " + idt.toDateString());
      if (dt.toDateString() == idt.toDateString()) {
        console.log("match found, value = " + totalhoursmap[i]);
        return totalhoursmap[i];
      }
    };
  }

  findtotalhrcellclass(week, totalhoursmap) {
    for (var i in totalhoursmap) {
      var dt = new Date(week);
      var idt = new Date(i);
      if (dt.toDateString() == idt.toDateString()) {
        if (totalhoursmap[i] > 40) {
          return 'extra-hours';
        }
      }
    };
  }

}
