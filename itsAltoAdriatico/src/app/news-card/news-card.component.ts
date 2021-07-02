import { Component, OnInit } from '@angular/core';
import { NewsPreview } from '../models/data-model';
import { ProxyApiService } from '../Services/proxy-api.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  news: NewsPreview [] = [];

  constructor(public api: ProxyApiService) { }

  ngOnInit(): void {
    this.getNews();
  }

  getNews () {
    this.api.getNewsPreview().subscribe(r => {
      this.news = r;
    })
  }

}
