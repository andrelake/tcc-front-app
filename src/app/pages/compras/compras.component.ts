import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Compra } from 'src/app/models/compra';
import { ModalFormProdutosComponent } from 'src/app/pages/produtos/modal_form_produtos/modal_form_produtos.component';

import { ProdutoService } from '../produtos/produto.service';
import { ComprasService } from './compras.service';
import { ModalInfoCompraComponent } from './modal-info-compra/modal-info-compra.component';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  dataSource = new MatTableDataSource<Compra>([]);
  displayedColumns: string[] = ['id', 'nf', 'fornecedor', 'categoria', 'valor', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  _listaDeCompras: Compra[] = [];

  // _solicitacaoDeCompraPorId: boolean = false;
  // _produto: any = null;

  // _produtoForm: any = this.formBuilder.group({
  //   id: [''],
  //   nome: [''],
  //   categoria: [''],
  //   quantidade: [''],
  //   fornecedor: [''],
  // });

  constructor(
    private comprasService: ComprasService,
    private produtoService: ProdutoService,
    private location: Location,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getTodasAsCompras();
    // this._solicitacaoDeCompraPorId = this.comprasService.solicitacaoDeCompraPorId;

    // if(this._solicitacaoDeCompraPorId) {
    //   this._produto = new Produto();
    //   this.comprasService.solicitarCompraProd$.subscribe(produto => {
    //     this._produto = produto;
    //     this._produtoForm.patchValue({
    //       id: [this._produto.id],
    //       nome: [this._produto.nome, [Validators.required, Validators.minLength(2)]],
    //       categoria: [this._produto.categoria, [Validators.required, Validators.minLength(2)]],
    //       quantidade:  [this._produto.quantidade, [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]*$')]],
    //       fornecedor: [this._produto.fornecedor, [Validators.required, Validators.minLength(2)]]
    //     });
    //   })
    // }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(ModalInfoCompraComponent, {
      width: '30%',
      height: '50%'
    });
  }

  getTodasAsCompras() {
    this.dataSource = new MatTableDataSource<Compra>(this.comprasService._listaDeCompras);
    this.dataSource.paginator = this.paginator;
  }

  deletarCompra(element: Compra) {
    this.comprasService.removerCompra(element);
    this.ngOnInit();
  }

  detalhesCompra(element: Compra) {
    this.dialog.open(ModalInfoCompraComponent, {
      width: '30%',
      data: element
    })
  }

  cancelar() {
    // this.comprasService.solicitacaoDeCompraPorId = false;
    // if(this._solicitacaoDeCompraPorId) {
    //   this._solicitacaoDeCompraPorId = false;
    // }

    // this.location.back();
    // this._produtoForm.reset();
  }

  cadastrarSolicitacaoCompraProduto() {
    // alert('Compra cadastrada com sucesso');
    // console.log(this._produtoForm.value);
    // this.comprasService.post_SolicitarCompra(this._produtoForm.value).subscribe();
    // this._produtoForm.reset();
  }

  atualizarTabela() {
    this.dataSource.data = this.dataSource.data;
  }
}
