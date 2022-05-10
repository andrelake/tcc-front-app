import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto';

import { ProdutoService } from '../produtos/produto.service';
import { ComprasService } from './compras.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  _solicitacaoDeCompraPorId: boolean = false;
  _produto: any = null;

  _produtoForm: any = this.formBuilder.group({
    id: [''],
    nome: [''],
    categoria: [''],
    quantidade: [''],
    fornecedor: [''],
  });

  constructor(
    private comprasService: ComprasService,
    private produtoService: ProdutoService,
    private location: Location,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this._solicitacaoDeCompraPorId = this.comprasService.solicitacaoDeCompraPorId;

    if(this._solicitacaoDeCompraPorId) {
      this._produto = new Produto();
      this.comprasService.solicitarCompraProd$.subscribe(produto => {
        this._produto = produto;
        this._produtoForm.patchValue({
          id: [this._produto.id],
          nome: [this._produto.nome, [Validators.required, Validators.minLength(2)]],
          categoria: [this._produto.categoria, [Validators.required, Validators.minLength(2)]],
          quantidade:  [this._produto.quantidade, [Validators.required, Validators.minLength(1), Validators.pattern('^[0-9]*$')]],
          fornecedor: [this._produto.fornecedor, [Validators.required, Validators.minLength(2)]]
        });
      })
    }
  }

  cancelar() {
    this.comprasService.solicitacaoDeCompraPorId = false;
    if(this._solicitacaoDeCompraPorId) {
      this._solicitacaoDeCompraPorId = false;
    }

    this.location.back();
    // this._produtoForm.reset();
  }

  cadastrarSolicitacaoCompraProduto() {
    alert('Compra cadastrada com sucesso');
    // console.log(this._produtoForm.value);
    // this.comprasService.post_SolicitarCompra(this._produtoForm.value).subscribe();
    // this._produtoForm.reset();
  }
}
