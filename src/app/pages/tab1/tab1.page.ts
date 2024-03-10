import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroeServiceService } from 'src/app/service/heroes-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  unosHeroes: Heroe[] = [];
  unTipo: String = 'lista';

  constructor(private data:HeroeServiceService) {
    this.unosHeroes = data.getHeroes();
    console.log("DATOS", this.unosHeroes)
  }

}
