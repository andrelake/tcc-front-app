import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

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

  constructor(
    private comprasService: ComprasService,
    private produtoService: ProdutoService,
    private location: Location,
    // private router: Router
  ) { }

  ngOnInit(): void {
    this._solicitacaoDeCompraPorId = this.comprasService.solicitacaoDeCompraPorId;

    this.comprasService.solicitarCompraProd$.subscribe(idDoProdutoSolicitado => {
      this._produto = this.produtoService._listaDeProdutos.find(produto => produto.id == idDoProdutoSolicitado);
      console.log('### produtosolicitadoporId');
      console.log(this._produto);
    })
  }

  cancelar() {
    this.comprasService.solicitacaoDeCompraPorId = false;
    if(this._solicitacaoDeCompraPorId) {
      this._solicitacaoDeCompraPorId = false;
    }

    this.location.back();
  }
}
