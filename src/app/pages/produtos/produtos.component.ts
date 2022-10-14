import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { element } from 'protractor';
import { ProdutoDTO } from 'src/app/models/dto/produtoDTO';
import { Produto } from 'src/app/models/produto';
import { ModalFormProdutosComponent } from 'src/app/pages/produtos/modal_form_produtos/modal_form_produtos.component';

import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  dataSource = new MatTableDataSource<ProdutoDTO>([]);
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'quantidade', 'precoUnitario', 'fornecedor', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild('modalConfirmacao') modalConfirmacao: TemplateRef<any>;

  filtro: string = '';
  faTrashIcon = faTrash;
  faPencilIcon = faPencil;
  faPlusIcon = faPlus;

  listaDeProd: ProdutoDTO[] = [];
  produtoSelecionado: any;

  constructor(
    private produtoService: ProdutoService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.produtoService.getTodosOsProdutos().subscribe(res => {
      this.listaDeProd = res.filter(prod => prod.ativo);
      this.getTodosOsProdutos();
    })
  }

  getTodosOsProdutos() {
    this.dataSource = new MatTableDataSource<ProdutoDTO>(this.listaDeProd);
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
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  editProduct(element: Produto) {
    this.dialog.open(ModalFormProdutosComponent, {
      width: '30%',
      height: '50%',
      data: element
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  deleteProduct() {
    this.produtoService.removerProduto(this.produtoSelecionado).subscribe(() => {
      this.fecharModal();
      this.ngOnInit();
    });
  }

  atualizarTabela() {
    this.dataSource.data = this.dataSource.data;
  }

  abrirModalConfirmacao(entidade: any) {
    this.produtoSelecionado = entidade;

    console.log(this.produtoSelecionado);

    this.dialog.open(this.modalConfirmacao, {
      width: '30%',
      height: '30%',
      data: entidade
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  fecharModal() {
    this.dialog.closeAll();
  }
}
