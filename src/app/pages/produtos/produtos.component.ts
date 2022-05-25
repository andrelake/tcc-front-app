import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { element } from 'protractor';
import { Produto } from 'src/app/models/produto';
import { ModalFormProdutosComponent } from 'src/app/pages/produtos/modal_form_produtos/modal_form_produtos.component';

import { ComprasService } from '../compras/compras.service';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  dataSource = new MatTableDataSource<Produto>([]);
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'quantidade', 'fornecedor', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  filtro: string = '';
  faTrashIcon = faTrash;
  faPencilIcon = faPencil;
  faPlusIcon = faPlus;

  _listaDeProd: Produto[] = [];

  constructor(
    private produtoService: ProdutoService,
    private comprasService: ComprasService,
    private dialog: MatDialog,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTodosOsProdutos();
  }

  getTodosOsProdutos() {
    this.dataSource = new MatTableDataSource<Produto>(this.produtoService.getTodosOsProdutos());
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(ModalFormProdutosComponent, {
      width: '30%',
      height: '50%'
    }).afterClosed().subscribe(res => this.atualizarTabela());
  }

  editProduct(element: Produto) {
    this.dialog.open(ModalFormProdutosComponent, {
      width: '30%',
      data: element
    })
  }

  deleteProduct(element: Produto) {
    this.produtoService.removerProduto(element);
    this.ngOnInit();
  }

  atualizarTabela() {
    this.dataSource.data = this.dataSource.data;
  }
}
