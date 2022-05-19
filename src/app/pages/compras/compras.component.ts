import { Location } from '@angular/common';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Compra } from 'src/app/models/compra';
import { Produto } from 'src/app/models/produto';

import { ProdutoService } from '../produtos/produto.service';
import { ComprasService } from './compras.service';

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

  getTodasAsCompras() {
    this.dataSource = new MatTableDataSource<Compra>(this.comprasService._listaDeCompras);
    this.dataSource.paginator = this.paginator;
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
}
