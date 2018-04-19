import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {
  resourceid = "";

  constructor(private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resourceid = this.route.snapshot.paramMap.get('id');
  }

}
