import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsCardComponent } from './news-card/news-card.component';
import { OpenDayCardComponent } from './open-day-card/open-day-card.component';


const routes: Routes = [{
  path:'openday', component: OpenDayCardComponent
},
{
  path:'newscard', component: NewsCardComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
