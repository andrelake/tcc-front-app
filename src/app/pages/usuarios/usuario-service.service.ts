import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/models/dto/usuarioDTO';
import { UsuarioInsertDTO } from 'src/app/models/dto/usuarioInsertDTO';
import { environment } from 'src/environments/environment';

import { Usuario } from './../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseURL: string = environment.baseUrl;
  _listaDeFornecedores: UsuarioDTO[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public buscaTodosUsuarios(): Observable<UsuarioDTO[]> {
    return this.http.get<UsuarioDTO[]>(`${this.baseURL}/usuario/todos`);
  }

  public salvarNovoUsuario(usuario: Usuario) {
    var novoUsuario = UsuarioInsertDTO.montaUsuarioInsertDTO(usuario);
    return this.http.post<UsuarioInsertDTO>(`${this.baseURL}/usuario`, novoUsuario);
  }

  public deletarUsuario(usuario: Usuario) {
    return this.http.delete<Usuario>(`${this.baseURL}/usuario/deletar`, {body: usuario});
  }
}
