import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { OpendayPreview } from '../models/data-model';
import { ProxyApiService } from '../Services/proxy-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  modal: boolean = false;

  chartsForm: FormGroup;

  chart1Value: number = 97;
  chart2Value: number = 100;
  chart3Value: number = 95;


  constructor(public route: Router, public api: ProxyApiService) {

    this.chartsForm = new FormGroup({
      chart1: new FormControl('97'),
      chart2: new FormControl('100'),
      chart3: new FormControl('95'),
    });
  }

  ngOnInit() {
    this.chartsForm.patchValue({
      chart1: this.chart1Value,
      chart2: this.chart2Value,
      chart3: this.chart3Value,
    });
  }

  openModal = () => {
    this.modal = true;
  }
}

