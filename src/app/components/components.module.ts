import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeroeComponent,
    HeroesComponent
  ],
  exports:[
    HeroesComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
