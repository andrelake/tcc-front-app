import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ModalFormCategoriaComponent } from './pages/categorias/modal-form-categoria/modal-form-categoria.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FornecedoresComponent } from './pages/fornecedores/fornecedores.component';
import { ModalFormFornecedorComponent } from './pages/fornecedores/modal-form-fornecedor/modal-form-fornecedor.component';
import { ModalInfoFornecedorComponent } from './pages/fornecedores/modal-info-fornecedor/modal-info-fornecedor.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginService } from './pages/login/login.service';
import { ModalFormProdutosComponent } from './pages/produtos/modal_form_produtos/modal_form_produtos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ModalFormUsuarioComponent } from './pages/usuarios/modal-form-usuario/modal-form-usuario.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProdutosComponent,
    ModalFormProdutosComponent,
    FornecedoresComponent,
    ModalInfoFornecedorComponent,
    ModalFormFornecedorComponent,
    UsuariosComponent,
    ModalFormUsuarioComponent,
    CategoriasComponent,
    ModalFormCategoriaComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
