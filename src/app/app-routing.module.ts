import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { IndexComponent } from './components/index/index.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'sobreMi', component: SobreMiComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'experiencia', component: EducacionComponent},
  {path: 'habilidades', component: SkillsComponent},
  {path: 'proyectos', component: ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
