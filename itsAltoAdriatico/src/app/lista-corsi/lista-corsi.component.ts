import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardCorsoComponent } from '../card-corso/card-corso.component';
import { CoursePreview } from '../models/data-model';
import { ProxyApiService } from '../Services/proxy-api.service';

@Component({
  selector: 'app-lista-corsi',
  templateUrl: './lista-corsi.component.html',
  styleUrls: ['./lista-corsi.component.scss'],
})
export class ListaCorsiComponent implements OnInit {
  constructor(private proxy: ProxyApiService) {}

  corsi: CoursePreview[] = [];

  ngOnInit(): void {
    this.proxy.getCoursePreview().subscribe((data) => {
      this.corsi = data;
      console.log(this.corsi);
    });
  }
}
