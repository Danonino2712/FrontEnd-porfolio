import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { PaginaRegistroComponent } from './components/pagina-registro/pagina-registro.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'sobreMi', component: SobreMiComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'experiencia', component: EducacionComponent},
  {path: 'habilidades', component: SkillsComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'panel', component: DashboardComponent},
  {path: 'login', component: PaginaLoginComponent},
  {path: 'registro', component: PaginaRegistroComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
