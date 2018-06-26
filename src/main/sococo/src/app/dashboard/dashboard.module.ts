import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { ResumoDiarioService } from '../resumo-diario/resumo-diario.service';
import { CocoComponent } from './coco/coco.component';
import { CriFlococoComponent } from './cri-flococo/cri-flococo.component';
import { OleoComponent } from './oleo/oleo.component';
import { AguaCocoComponent } from './agua-coco/agua-coco.component';
import { FardoComponent } from './fardo/fardo.component';
import { CacambaComponent } from './cacamba/cacamba.component';
import { TortaComponent } from './torta/torta.component';
import { CocoGerminadoComponent } from './coco-germinado/coco-germinado.component';
import { CaixaPadraoComponent } from './caixa-padrao/caixa-padrao.component';



@NgModule({
    imports:[
        DashboardRoutingModule,
        SharedModule,
    ],
    declarations:[
        DashboardComponent,
        CocoComponent,
        CriFlococoComponent,
        OleoComponent,
        AguaCocoComponent,
        FardoComponent,
        CacambaComponent,
        TortaComponent,
        CocoGerminadoComponent,
        CaixaPadraoComponent
    ],
    providers:[
        ResumoDiarioService
    ]
})
export class DashboardModule {}
