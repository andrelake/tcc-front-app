import { ModalFormCategoriaComponent } from './modal-form-categoria/modal-form-categoria.component';
import { ProdutoService } from './../produtos/produto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaDTO } from 'src/app/models/dto/categoriaDTO';

import { CategoriaService } from './categoria.service';
import { FornecedoresService } from '../fornecedores/fornecedores.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  dataSource = new MatTableDataSource<CategoriaDTO>([]);
  displayedColumns: string[] = ['id', 'nome', 'action'];
  @ViewChild (MatPaginator) paginator!: MatPaginator;

  listaDeCategorias: CategoriaDTO[];

  constructor(
    private categoriaService: CategoriaService,
    private produtoService: ProdutoService,
    private fornecedorService: FornecedoresService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.categoriaService.buscaTodasCategorias().subscribe(res => {
      this.listaDeCategorias = res
        .filter(categoria => categoria.ativo)
        .sort((a,b) => a.nome.toLowerCase() > b.nome.toLowerCase() ? 1 : -1);

        this.getTodasCategorias();
    })
  }

  openDialog() {
    this.dialog.open(ModalFormCategoriaComponent, {
      width: '30%',
      height: '50%'
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  getTodasCategorias() {
    this.dataSource = new MatTableDataSource<CategoriaDTO>(this.listaDeCategorias);
    this.dataSource.paginator = this.paginator;
  }

  editarCategoria(entidade: Categoria) {
    this.dialog.open(ModalFormCategoriaComponent, {
      width: '40%',
      data: entidade
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

}
