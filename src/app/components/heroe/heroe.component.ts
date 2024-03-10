import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent  implements OnInit {
  @Input() unHeroe!: Heroe;
  
  constructor() { }

  ngOnInit() {}

}
