import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FornecedorDTO } from 'src/app/models/dto/fornecedorDTO';
import { FornecedorFormDTO } from 'src/app/models/dto/fornecedorFormDTO';
import { FornecedorProdsDTO } from 'src/app/models/dto/fornecedorProdsDTO';
import { Fornecedor } from 'src/app/models/fornecedor';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  baseURL: string = environment.baseUrl;
  _listaDeFornecedores: Fornecedor[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public buscaTodosFornecedores(): Observable<FornecedorDTO[]> {
    return this.http.get<FornecedorDTO[]>(`${this.baseURL}/fornecedor/todos`);
  }

  public buscaFornecedorPorId(id: number): Observable<FornecedorProdsDTO> {
    return this.http.get<FornecedorProdsDTO>(`${this.baseURL}/fornecedor/busca/${id}`);
  }

  public salvarNovoFornecedor(object) {
    var fornecedorForm: FornecedorFormDTO = {
      nome: object.nome,
      categoria: object.categoria
    }

    return this.http.post<FornecedorFormDTO>(`${this.baseURL}/fornecedor`, fornecedorForm);
  }

  public atualizarFornecedor(object) {
    return this.http.put<FornecedorDTO>(`${this.baseURL}/fornecedor/atualizar`, object);
  }

  public removerFornecedor(element: Fornecedor) {
    return this.http.delete<Fornecedor>(`${this.baseURL}/fornecedor/deletar`, {body: element});
  }

  public verificaSeTemProdutos(id: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseURL}/fornecedor/busca/${id}`);
  }
}
