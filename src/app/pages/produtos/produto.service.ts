import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoDTO } from 'src/app/models/dto/produtoDTO';
import { ProdutoFormDTO } from 'src/app/models/dto/produtoFormDTO';
import { Produto } from 'src/app/models/produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseURL: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  salvarNovoProduto(produto: ProdutoFormDTO) {
    return this.http.post<ProdutoFormDTO>(`${this.baseURL}/produto`, produto);
  }

  // removerProduto(element: Produto) {
  //   let produtoSelecionado = this._listaDeProdutos.find(produto => produto.nome === element.nome && produto.fornecedor === element.fornecedor);
  //   this._listaDeProdutos.splice(this._listaDeProdutos.indexOf(produtoSelecionado), 1);
  // }

  getTodosOsProdutos(): Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(`${this.baseURL}/produto/todos`);
  }
}
