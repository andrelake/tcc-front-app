import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/models/dto/usuarioDTO';
import { UsuarioFormDTO } from 'src/app/models/dto/usuarioFormDTO';
import { Usuario } from 'src/app/models/usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL: string = environment.baseUrl;
  public _listaDeUsuarios: Usuario[] = [];
  public usuarioLogado: UsuarioDTO;

  public isUsuarioAutenticado: Boolean = false;
  public usuarioLogado$ = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public buscaListaDeUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseURL}/usuario/todos`);
  }

  // public  buscaUsuarioLogado(usuario: UsuarioFormDTO): Observable<Usuario> {
  //   return this.http.post<Usuario>(`${this.baseURL}/usuario/busca`, usuario);
  // }


  public autenticaUsuario(usuario: UsuarioFormDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>(`${this.baseURL}/login/autenticaUsuario`, usuario);
  }

  public processaAutenticacaoUsuario(usuarioAutenticado: UsuarioDTO) {
    if(usuarioAutenticado != null) {
      this.isUsuarioAutenticado = true;
      this.usuarioLogado = usuarioAutenticado;
      this.usuarioLogado$.emit(true);
    }

    if(this.isUsuarioAutenticado) {
      console.log('Usuário ' + usuarioAutenticado.username + ' autenticado com sucesso.')
      this.router.navigate(['/home']);
    }
    else {
      console.log('Erro ao autenticar usuário.')
      alert('Erro ao autenticar usuário.')
      this.usuarioLogado$.emit(false);
    }
  }
}
