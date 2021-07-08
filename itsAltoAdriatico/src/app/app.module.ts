import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { OpenDayCardComponent } from './open-day-card/open-day-card.component';
import { PartnerBannerComponent } from './partner-banner/partner-banner.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';
import { CardCorsoComponent } from './card-corso/card-corso.component';
import { ThumbnailPageComponent } from './thumbnail-page/thumbnail-page.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsListComponent } from './news-list/news-list.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { SubscriptionCourseComponent } from './subscription-course/subscription-course.component';
import { SubscriptionOpendayComponent } from './subscription-openday/subscription-openday.component';

import { HomepageComponent } from './homepage/homepage.component';

import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';
import {ReactiveFormsModule} from "@angular/forms";
import { CorsiHomeComponent } from './corsi-home/corsi-home.component';
import { DettaglioCorsoComponent } from './dettaglio-corso/dettaglio-corso.component';

@NgModule({
  declarations: [
    ListaCorsiComponent,
    CardCorsoComponent,
    ChiSiamoComponent,
    ContattiComponent,
    NewsListComponent,
    SubscriptionCourseComponent,
    SubscriptionOpendayComponent,
    ThumbnailPageComponent,
    AppComponent,
    HomepageComponent,
    NewsCardComponent,
    OpenDayCardComponent,
    PartnerBannerComponent,
    CorsiHomeComponent,
    DettaglioCorsoComponent
  ],
  imports: [
    BrowserModule,
    KnobModule,
    ChartModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CalendarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
