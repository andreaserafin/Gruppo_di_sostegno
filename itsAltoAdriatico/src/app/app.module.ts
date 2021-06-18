import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';
import { CardCorsoComponent } from './card-corso/card-corso.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCorsiComponent,
    CardCorsoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
