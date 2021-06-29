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

import { HomepageComponent } from './homepage/homepage.component';

import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';
import {ReactiveFormsModule} from "@angular/forms";
import { CorsiHomeComponent } from './corsi-home/corsi-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCorsiComponent,
    CardCorsoComponent,
    ChiSiamoComponent,
    ContattiComponent,
    ThumbnailPageComponent,
    AppComponent,
    HomepageComponent,
    AppComponent,
    NewsCardComponent,
    OpenDayCardComponent,
    PartnerBannerComponent,
    CorsiHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KnobModule,
    ChartModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
