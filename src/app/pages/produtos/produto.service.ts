import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdutoDTO } from 'src/app/models/dto/produtoDTO';
import { ProdutoFormDTO } from 'src/app/models/dto/produtoFormDTO';
import { environment } from 'src/environments/environment.prod';

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

  removerProduto(element: ProdutoFormDTO) {
    return this.http.delete<ProdutoFormDTO>(`${this.baseURL}/produto/deletar`, {body: element});
  }

  getTodosOsProdutos(): Observable<ProdutoDTO[]> {
    return this.http.get<ProdutoDTO[]>(`${this.baseURL}/produto/todos`);
  }

  atualizarProduto(produto: ProdutoDTO) {
    return this.http.put<ProdutoDTO>(`${this.baseURL}/produto/atualizar`, produto);
  }
}
