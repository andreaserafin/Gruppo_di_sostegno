import { Component, Input, OnInit } from '@angular/core';
import { OpendayPreview } from '../models/data-model';
import { ProxyApiService } from '../Services/proxy-api.service';

@Component({
  selector: 'app-open-day-card',
  templateUrl: './open-day-card.component.html',
  styleUrls: ['./open-day-card.component.scss']
})
export class OpenDayCardComponent implements OnInit {
  
  openDay: OpendayPreview [] = [];

  constructor(public api: ProxyApiService) { }

  ngOnInit(): void {
    this.getOpenDay();
  }

  
  getOpenDay() {
    this.api.getAnteprimaOpenDay().subscribe(r => {
      this.openDay = r; }
    );
  }

}
