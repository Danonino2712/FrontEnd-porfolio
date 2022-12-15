import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { IndexComponent } from './components/index/index.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PanelComponent } from './components/panel/panel.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PaginaRegistroComponent } from './components/pagina-registro/pagina-registro.component';
import { HttpClientModule } from '@angular/common/http';
import { RedesComponent } from './components/nav-bar/redes/redes.component';
import { ErrorComponent } from './components/error/error.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciaComponent,
    EducacionComponent,
    SobreMiComponent,
    LoginComponent,
    ProyectosComponent,
    SkillsComponent,
    IndexComponent,
    DashboardComponent,
    PanelComponent,
    NavBarComponent,
    PaginaLoginComponent,
    LogoutComponent,
    PaginaRegistroComponent,
    RedesComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
