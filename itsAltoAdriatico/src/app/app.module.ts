import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';

import { KnobModule } from 'primeng/knob';
import { ChartModule } from 'primeng/chart';
import { OpenDayCardComponent } from './open-day-card/open-day-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OpenDayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KnobModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
