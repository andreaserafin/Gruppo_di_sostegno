import { ContattiComponent } from './contatti/contatti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';

const routes: Routes = [
  {path:"chi-siamo",component:ChiSiamoComponent},
  {path:"contatti",component:ContattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
