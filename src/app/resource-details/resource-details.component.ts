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
  resourceInfoarr;
  
  

  constructor(private route: ActivatedRoute,
    private resourcesService: ResourcesService,
  ) {
  }

  ngOnInit() {
    this.resourceid = this.route.snapshot.paramMap.get('id');
    this.getResourceDetails();
  }

  getResourceDetails(): void {
    if (this.resourceid != undefined) {
      this.resourcesService.getResourceDetails(this.resourceid)
        .subscribe(resp => this.resourceInfoarr = resp);
    } else {
      this.resourcesService.getAllResourceDetails().subscribe(resp => this.resourceInfoarr = resp);
    }
  }

  deleteResource(id) {
    this.resourcesService.deleteResource(id)
      .subscribe(resp => this.resourceInfoarr = resp);
  }

  updateName(resourceInfo){
    
    this.resourcesService.updateName(resourceInfo)
      .subscribe(resp => this.resourceInfoarr = resp);

  }

  isExtaHr(hrs) {
    if (hrs > 40) {
      return 'extra-hours';
    } else {
      return;
    }
  }

}
