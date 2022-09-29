import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioDTO } from 'src/app/models/dto/usuarioDTO';
import { ModalFormUsuarioComponent } from './modal-form-usuario/modal-form-usuario.component';

import { UsuarioService } from './usuario-service.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  dataSource = new MatTableDataSource<UsuarioDTO>([]);
  displayedColumns: string[] = ['nomeCompleto', 'username', 'isAdmin', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listaDeUsuarios: UsuarioDTO[];

  constructor(
    private usuarioService: UsuarioService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.usuarioService.buscaTodosUsuarios().subscribe(res => {
      this.listaDeUsuarios = res;
      this.getTodosUsuarios();
    });
  }

  getTodosUsuarios() {
    this.dataSource = new MatTableDataSource<UsuarioDTO>(this.listaDeUsuarios);
    this.dataSource.paginator = this.paginator;
  }

  openDialog() {
    this.dialog.open(ModalFormUsuarioComponent, {
      width: '30%',
      height: '50%'
    }).afterClosed().subscribe(res => this.atualizarTabela());
  }

  applyFilter($event){

  }

  deletarUsuario(element) {

  }

  atualizarTabela() {
    this.dataSource.data = this.dataSource.data;
  }
}
