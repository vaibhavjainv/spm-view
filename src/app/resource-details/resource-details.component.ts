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
    private resourcesService: ResourcesService
  ) { }

  ngOnInit() {
    this.resourceid = this.route.snapshot.paramMap.get('id');
    this.getResourceDetails();
  }

  getResourceDetails(): void {
    this.resourcesService.getResourceDetails(this.resourceid)
      .subscribe(resp => this.resourceInfo = resp);
  }


}
