import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriasComponent } from './pages/categorias/categorias.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'produtos', component: ProdutosComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'fornecedores', component: FornecedoresComponent
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
