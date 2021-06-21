import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OpenDayCardComponent } from './open-day-card/open-day-card.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path:'', component: OpenDayCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
