import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  graph1: any;
  graph2: any;
  graph3: any;

  constructor() { }

  ngOnInit(): void {
    this.getChart();
  }

  getChart = () => {
    this.graph1 = {
      datasets: [
        {
          data: [97, 3],
          backgroundColor: ["#F41D1A", "#FFFFFF"],
          borderWidth: 0
        }]
    };
    this.graph2 = {
      datasets: [
        {
          data: [100],
          backgroundColor: ["#F41D1A", "#FFFFFF"],
          borderWidth: 0
        }]
    };
    this.graph3 = {
      datasets: [
        {
          data: [95, 5],
          backgroundColor: ["#F41D1A", "#FFFFFF"],
          borderWidth: 0
        }]
    };
  }

}
