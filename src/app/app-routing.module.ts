import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/index/index.component';
import { PaginaLoginComponent } from './components/pagina-login/pagina-login.component';
import { PaginaRegistroComponent } from './components/pagina-registro/pagina-registro.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
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
