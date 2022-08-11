import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FornecedorDTO } from 'src/app/models/dto/fornecedorDTO';
import { Fornecedor } from 'src/app/models/fornecedor';
import { environment } from 'src/environments/environment';

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

  public removerFornecedor(element: Fornecedor) {
    return this.http.delete<Fornecedor>(`${this.baseURL}/fornecedor/deletar`, {body: element});
  }
}
