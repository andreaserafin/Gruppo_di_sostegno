import { ContattiComponent } from './contatti/contatti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from './news-card/news-card.component';
import { OpenDayCardComponent } from './open-day-card/open-day-card.component';
import { PartnerBannerComponent } from './partner-banner/partner-banner.component';
import { CardCorsoComponent } from './card-corso/card-corso.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';
import { HomepageComponent } from './homepage/homepage.component';

import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
const routes: Routes = [
  {
    path: 'lista-corsi',
    component:  ListaCorsiComponent,
    pathMatch: 'full',
  },
  {
    path:"chi-siamo",
    component:ChiSiamoComponent,
    pathMatch: 'full',},
  {
    path:"contatti",
    component:ContattiComponent,
    pathMatch: 'full',
    },
    { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
