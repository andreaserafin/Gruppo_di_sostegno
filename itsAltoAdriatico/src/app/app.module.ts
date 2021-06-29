import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { OpenDayCardComponent } from './open-day-card/open-day-card.component';
import { PartnerBannerComponent } from './partner-banner/partner-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsCardComponent,
    OpenDayCardComponent,
    PartnerBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
