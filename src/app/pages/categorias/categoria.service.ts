import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaDTO } from 'src/app/models/dto/categoriaDTO';
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

  public removerCategoria(element: Categoria) {
    return this.http.delete<Categoria>(`${this.baseURL}/categoria/deletar`, {body: element});
  }
}
