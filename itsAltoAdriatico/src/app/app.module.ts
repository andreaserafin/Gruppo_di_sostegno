import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';
import { CardCorsoComponent } from './card-corso/card-corso.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './news-list/news-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { SubscriptionCourseComponent } from './subscription-course/subscription-course.component';
import { SubscriptionOpendayComponent } from './subscription-openday/subscription-openday.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCorsiComponent,
    CardCorsoComponent,
    ChiSiamoComponent,
    ContattiComponent,
    NewsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SubscriptionCourseComponent,
    SubscriptionOpendayComponent,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
