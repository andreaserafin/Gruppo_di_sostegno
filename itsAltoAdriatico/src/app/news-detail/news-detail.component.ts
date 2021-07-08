import { Component, OnInit } from '@angular/core';
import { DetailNews } from '../models/data-model';
import { ProxyApiService } from '../Services/proxy-api.service';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  detailNews:any;

  constructor(private proxy: ProxyApiService) { 
  }

  ngOnInit(): void {
    this.proxy.getDettaglioNews().subscribe((resp: DetailNews[])=>{
      this.detailNews = [...resp];
      console.log(this.detailNews)
    });
  }

}