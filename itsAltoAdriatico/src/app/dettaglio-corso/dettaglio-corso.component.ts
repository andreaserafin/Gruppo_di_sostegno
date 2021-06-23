import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dettaglio-corso',
  templateUrl: './dettaglio-corso.component.html',
  styleUrls: ['./dettaglio-corso.component.scss']
})
export class DettaglioCorsoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* public editBorder(parte: string){
    let pippo: any = document.getElementById(parte)
    
    for (const element of pippo.classList) {
      if (element === "bordi") {
        pippo.classList.replace("bordi", "bordi-alti")

      } else if (element === "bordi-alti") {
        pippo.classList.replace("bordi-alti","bordi")
      }
    }
  } */
  activetabnumber: number = 1
  n: number = 0;
  public activetab(n: number){
    this.activetabnumber = n
  }

  public editBorder(parte: number) {
    //let pippo: any = document.getElementById(parte)
    //let n = 0;
    this.n = this.activetabnumber;  
    return parte===this.activetabnumber ? "bordi-alti" : "bordi";
  }

  public noActiveTab() {
    if (this.activetabnumber === this.n) {
      this.activetabnumber = 0;
    }
  }

}
