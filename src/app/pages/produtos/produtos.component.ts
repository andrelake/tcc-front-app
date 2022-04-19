import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';

import { faTrash, faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'
import { ProdutoService } from './produto.service';
import { ComprasService } from '../compras/compras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

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

  ngOnInit(): void {
    this._listaDeProd = this.produtoService._listaDeProdutos;
  }

  deletarProd(id: number) {
    if(this._listaDeProd.length) {
      for (let i = 0; i < this._listaDeProd.length; i++) {
        let prod = this._listaDeProd[i];

        if(prod.id == id)
          this._listaDeProd.splice(i, 1);
      }
    }
  }

  editarProd(id: number) {

  }

  solicitarCompraProdPorId(id: number) {
    this.comprasService.solicitarCompraProd$.emit(id);
    this.comprasService.solicitacaoDeCompraPorId = true;
    this.router.navigate(['/compras']);
  }
}
