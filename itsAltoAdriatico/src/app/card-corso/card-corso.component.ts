import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursePreview, OpendayPreview } from '../models/data-model';
import { ProxyApiService } from '../Services/proxy-api.service';

@Component({
  selector: 'app-card-corso',
  templateUrl: './card-corso.component.html',
  styleUrls: ['./card-corso.component.scss']
})

export class CardCorsoComponent implements OnInit {
  @Input('ParentToChild') corso!: CoursePreview;
  
  coursePreview: CoursePreview[] | undefined;

  constructor(private proxyApi: ProxyApiService, public route: Router) { 
  }

  ngOnInit(): void {
  
  }
}



