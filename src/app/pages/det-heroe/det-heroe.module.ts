import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetHeroePageRoutingModule } from './det-heroe-routing.module';

import { DetHeroePage } from './det-heroe.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
    declarations: [DetHeroePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetHeroePageRoutingModule,
        ComponentsModule,
    ]
})
export class DetHeroePageModule {}
