import { EventEmitter, Injectable, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  _listaDeProdutos: Produto[] = [
    {
      id: 1,
      nome: 'Lápis preto 2B',
      categoria: 'Material de escritório',
      quantidade: 150,
      fornecedor: 'Faber-Castel'
    },
    {
      id: 2,
      nome: 'Caneta azul',
      categoria: 'Material de escritório',
      quantidade: 102,
      fornecedor: 'Bic'
    },
    {
      id: 3,
      nome: 'Borracha branca',
      categoria: 'Material de escritório',
      quantidade: 80,
      fornecedor: 'Faber-Castel'
    },
  ];

  constructor() { }
}
