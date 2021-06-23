import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DettaglioCorsoComponent } from './dettaglio-corso/dettaglio-corso.component';

@NgModule({
  declarations: [
    AppComponent,
    DettaglioCorsoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
