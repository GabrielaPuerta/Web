import { Injectable } from '@angular/core';
import { HeroeServiceService } from './heroes-service.service'; // Asegúrate de importar el servicio de héroes

@Injectable({
  providedIn: 'root',
})
export class FotosHeroesService {
  constructor(private heroeService: HeroeServiceService) {}

  getFotosHeroe(idHeroe: number): string[] | undefined {
    const heroe = this.heroeService.getUnHeroe(idHeroe);

    // Verifica si el héroe existe
    if (heroe) {
      return heroe.imagenes;
    }

    return undefined;
  }
}
