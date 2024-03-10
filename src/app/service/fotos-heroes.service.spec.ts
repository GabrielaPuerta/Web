import { TestBed } from '@angular/core/testing';

import { FotosHeroesService } from './fotos-heroes.service';

describe('FotosHeroesService', () => {
  let service: FotosHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotosHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
