import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumoDiarioComponent } from './formulario/resumo-diario.component';
import { ResumoDiarioListaComponent } from './lista/resumo-diario-lista.component';
import { ResumoDoDiaComponent } from './resumo-do-dia/resumo-do-dia.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


// rotas para ações Resumo diario
const routes: Routes = [
    {
        path: 'lancamento-do-dia',
        component: ResumoDiarioComponent
    },
    {
        path: 'lancamentos',
        component: ResumoDiarioListaComponent
    },
    {
        path: 'resumo-do-dia',
        component: ResumoDoDiaComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ResumoDiarioRoutingModule { }
