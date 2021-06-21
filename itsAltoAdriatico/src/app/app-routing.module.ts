import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionCourseComponent } from './subscription-course/subscription-course.component';

const routes: Routes = [
  { path: 'sub-course', component: SubscriptionCourseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
