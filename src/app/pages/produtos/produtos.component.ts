import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Produto } from 'src/app/models/produto';

import { ComprasService } from '../compras/compras.service';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  dataSource = new MatTableDataSource<Produto>([]);
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'quantidade', 'fornecedor'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filtro: string = '';
  faTrashIcon = faTrash;
  faPencilIcon = faPencil;
  faPlusIcon = faPlus;

  _listaDeProd: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private comprasService: ComprasService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTodosOsProdutos();
  }

  getTodosOsProdutos() {
    this.dataSource = new MatTableDataSource<Produto>(this.produtoService._listaDeProdutos);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
