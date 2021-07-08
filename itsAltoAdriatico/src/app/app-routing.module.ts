import { ContattiComponent } from './contatti/contatti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from './news-card/news-card.component';
import { OpenDayCardComponent } from './open-day-card/open-day-card.component';
import { PartnerBannerComponent } from './partner-banner/partner-banner.component';
import { CardCorsoComponent } from './card-corso/card-corso.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DettaglioCorsoComponent } from './dettaglio-corso/dettaglio-corso.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsListComponent } from './news-list/news-list.component';
import { SubscriptionCourseComponent } from './subscription-course/subscription-course.component';
import { SubscriptionOpendayComponent } from './subscription-openday/subscription-openday.component';
const routes: Routes = [
    {
        path: '', component: HomepageComponent
    },
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
  {
    path:"news/dettagli",
    component:NewsDetailComponent,
    pathMatch: 'full',
  },
  {
    path:"news",
    component:NewsListComponent,
    pathMatch: 'full',
  },
  { 
    path: 'sub-course',
    component: SubscriptionCourseComponent ,
    pathMatch: 'full',
  },
  { 
    path: 'sub-openday',
    component: SubscriptionOpendayComponent,
    pathMatch: 'full'
  },
  { 
    path: 'dettaglio-corso',
    component:  DettaglioCorsoComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
