import { Component, OnInit } from '@angular/core';
import { CardCorsoComponent } from '../card-corso/card-corso.component';
import { ThumbnailPageComponent } from '../thumbnail-page/thumbnail-page.component';

@Component({
  selector: 'app-lista-corsi',
  templateUrl: './lista-corsi.component.html',
  styleUrls: ['./lista-corsi.component.scss']
})
export class ListaCorsiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
