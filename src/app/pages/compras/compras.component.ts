import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProdutoService } from '../produtos/produto.service';
import { ComprasService } from './compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  _solicitacaoDeCompraPorId: boolean = false;
  _produto = null;

  _produtoForm: FormGroup;

  constructor(
    private comprasService: ComprasService,
    private produtoService: ProdutoService,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this._solicitacaoDeCompraPorId = this.comprasService.solicitacaoDeCompraPorId;

    this._produtoForm = this.formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      categoria: ['', [Validators.required, Validators.minLength(2)]],
      quantidade:  ['', [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]*$')]],
      fornecedor: ['', [Validators.required, Validators.minLength(2)]]
    });

    this.comprasService.solicitarCompraProd$.subscribe(idDoProdutoSolicitado => {
      if(this._solicitacaoDeCompraPorId){
        this._produto = this.produtoService._listaDeProdutos.find(produto => produto.id == idDoProdutoSolicitado);
        this._produtoForm.patchValue({
          id: this._produto.id,
          nome: this._produto.nome,
          categoria: this._produto.categoria,
          quantidade:  this._produto.quantidade,
          fornecedor: this._produto.fornecedor,
        });

        console.log('### produtosolicitadoporId');
        console.log(this._produto);
      }
    })
  }

  cancelar() {
    this.comprasService.solicitacaoDeCompraPorId = false;
    if(this._solicitacaoDeCompraPorId) {
      this._solicitacaoDeCompraPorId = false;
    }

    this.location.back();
    this._produtoForm.reset();
  }

  cadastrarSolicitacaoCompraProduto() {
    alert('Compra cadastrada com sucesso');
    console.log(this._produtoForm.value);
    // this.comprasService.post_SolicitarCompra(this._produtoForm.value).subscribe();
    this._produtoForm.reset();
  }
}
