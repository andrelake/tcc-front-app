import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
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

  _listaDeCategorias: Categoria[] = [
    {
      id: 1,
      nome: 'Material de escritório'
    }]

  constructor() { }

  salvarNovoProduto(produto: Produto) {
    produto.id = this._listaDeProdutos.length + 1;
    this._listaDeProdutos.push(produto);
  }

  removerProduto(element: Produto) {
    let produtoSelecionado = this._listaDeProdutos.find(produto => produto.nome === element.nome);
    this._listaDeProdutos.splice(this._listaDeProdutos.indexOf(produtoSelecionado), 1);
  }

  getTodosOsProdutos() {
    return this._listaDeProdutos;
  }
}
