import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UserComponent } from './util-template/user/user.component';
import { TableComponent } from './util-template/table/table.component';
import { TypographyComponent } from './util-template/typography/typography.component';
import { IconsComponent } from './util-template/icons/icons.component';
import { MapsComponent } from './util-template/maps/maps.component';
import { NotificationsComponent } from './util-template/notifications/notifications.component';
import { UpgradeComponent } from './util-template/upgrade/upgrade.component';
import { ResumoDoDiaComponent } from './resumo-diario/resumo-do-dia/resumo-do-dia.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'resumo-do-dia',
        pathMatch: 'full',
    },
    {
        path: 'resumo-do-dia',
        component: ResumoDoDiaComponent
    },
    // {
    //     path: 'user',
    //     component: UserComponent
    // },
    // {
    //     path: 'table',
    //     component: TableComponent
    // },
    // {
    //     path: 'typography',
    //     component: TypographyComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },
    // {
    //     path: 'maps',
    //     component: MapsComponent
    // },
    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
    // {
    //     path: 'upgrade',
    //     component: UpgradeComponent
    // }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
