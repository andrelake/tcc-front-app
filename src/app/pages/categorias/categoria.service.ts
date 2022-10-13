import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaDTO } from 'src/app/models/dto/categoriaDTO';
import { CategoriaFormDTO } from 'src/app/models/dto/categoriaFormDTO';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseURL: string = environment.baseUrl;
  _listaDeCategorias: Categoria[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public buscaTodasCategorias(): Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${this.baseURL}/categoria/todos`);
  }

  public salvarNovaCategoria(element: CategoriaFormDTO) {
    return this.http.post<CategoriaFormDTO>(`${this.baseURL}/categoria`, element);
  }

  public atualizarCategoria(dto: CategoriaDTO) {
    return this.http.put<CategoriaDTO>(`${this.baseURL}/categoria/atualizar`, dto);
  }

  public removerCategoria(element: Categoria) {
    return this.http.delete<Categoria>(`${this.baseURL}/categoria/deletar`, {body: element});
  }
}
