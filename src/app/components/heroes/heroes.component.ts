import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroeServiceService } from 'src/app/service/heroes-service.service';
import { FotosHeroesService } from 'src/app/service/fotos-heroes.service'; // Asegúrate de importar el servicio de fotos

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  @Input() unosHeroes: Heroe[] = [];
  @Input() tipo!: String;

  constructor(
    private router: Router,
    private heroeService: HeroeServiceService,
    private fotosHeroesService: FotosHeroesService // Inyecta el servicio de fotos
  ) {}


  galeria(unHeroe: Heroe) {
    // Utiliza el servicio para obtener las fotos del héroe específico
    const imagenesGaleria = this.fotosHeroesService.getFotosHeroe(unHeroe.id);

    if (imagenesGaleria) {
      // Asigna las imágenes específicas del héroe a imagenesGaleria
      unHeroe.imagenesGaleria = imagenesGaleria;
    }
  }
  ngOnInit() {}

  navegarHeroe(unId:any){
    this.router.navigate(['./det-heroe', unId])
  }

  }
