import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { AppRoutes } from './app.routing';

import { UserComponent } from './util-template/user/user.component';
import { TableComponent } from './util-template/table/table.component';
import { TypographyComponent } from './util-template/typography/typography.component';
import { IconsComponent } from './util-template/icons/icons.component';
import { MapsComponent } from './util-template/maps/maps.component';
import { NotificationsComponent } from './util-template/notifications/notifications.component';
import { UpgradeComponent } from './util-template/upgrade/upgrade.component';
import { SidebarModule } from './util-template/sidebar/sidebar.module';
import { InputComponent } from './shared/input/input.component';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ResumoDiarioModule } from './resumo-diario/resumo-diario.module';

import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutes,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),

    ResumoDiarioModule,
    DashboardModule,
    LoginModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
