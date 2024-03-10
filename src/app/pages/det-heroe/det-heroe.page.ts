import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroeServiceService } from 'src/app/service/heroes-service.service';

@Component({
  selector: 'app-det-heroe',
  templateUrl: './det-heroe.page.html',
  styleUrls: ['./det-heroe.page.scss'],
})
export class DetHeroePage implements OnInit {
  unId!:any;
  unHeroe!:Heroe;

  constructor(route: ActivatedRoute,
    data:HeroeServiceService) { 
    this.unId = route.snapshot.params["id"];
    console.log(this.unId);

    this.unHeroe = data.getUnHeroe(this.unId);
    console.log(this.unHeroe);

  }

  ngOnInit() {
  }

}
