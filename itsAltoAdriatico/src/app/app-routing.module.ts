import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettaglioCorsoComponent } from './dettaglio-corso/dettaglio-corso.component';

const routes: Routes = [
  { path: 'dettaglio-corso', component:  DettaglioCorsoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
