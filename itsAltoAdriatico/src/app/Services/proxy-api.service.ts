import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CoursePreview, DetailCourse, DetailNews, NewsPreview, OpendayPreview } from '../models/data-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  apiKey= environment.apiUrl

  constructor(private http: HttpClient) { }

    getCoursePreview(){
      return this.http.get<CoursePreview[]>(this.apiKey+"anteprima_corsi/");
    }

    getOldCoursePreview(){
      return this.http.get<CoursePreview[]>(this.apiKey+"anteprima_corsi_archiviati/");
    }

    getNewsPreview(){
      return this.http.get<NewsPreview[]>(this.apiKey+"anteprima_news/");
    }

    getAnteprimaOpenDay(){
      return this.http.get<OpendayPreview[]>(this.apiKey+"anteprima_openday/");
    }


    getDettaglioNews(){
      return this.http.get<DetailNews[]>(this.apiKey+"dettaglio_news/");
    }

    getDettaglioCorso(){
      return this.http.get<DetailCourse[]>(this.apiKey+"dettaglio_corso/");
    }
}
