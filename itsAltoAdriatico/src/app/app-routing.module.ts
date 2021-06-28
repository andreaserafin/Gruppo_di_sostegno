import { ContattiComponent } from './contatti/contatti.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardCorsoComponent } from './card-corso/card-corso.component';
import { ListaCorsiComponent } from './lista-corsi/lista-corsi.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
