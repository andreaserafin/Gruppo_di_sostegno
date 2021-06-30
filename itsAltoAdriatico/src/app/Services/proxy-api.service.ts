import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { CoursePreview, NewsPreview } from '../models/data-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProxyApiService {

  apiKey= environment.apiUrl

  constructor(private http: HttpClient) { }

    getCoursePreview(){
      return this.http.get<CoursePreview[]>(this.apiKey+"data/anteprima_corsi/");
    }

    getOldCoursePreview(){
      return this.http.get<CoursePreview[]>(this.apiKey+"data/anteprima_corsi_archiviati/");
    }

    getNewsPreview(){
      return this.http.get<NewsPreview[]>(this.apiKey+"data/anteprima_news/");
    }
}
