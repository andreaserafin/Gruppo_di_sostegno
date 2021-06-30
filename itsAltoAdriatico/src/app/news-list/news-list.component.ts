import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  constructor() { }
minnie = [{},{},{},{}]
  ngOnInit(): void {
  }

  pippo(){
    console.log("pippo")
  }

}
