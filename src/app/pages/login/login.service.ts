import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public _listaDeUsuarios: Usuario[] = [
  {
    nome: 'joao',
    senha: '123456'
  }
  ];

  public usuarioAutenticado: boolean = false;

  constructor() { }

  get listaDeUsuarios() {
    return this._listaDeUsuarios;
  }

  public autenticarUsuario(usuario: Usuario) {
    this._listaDeUsuarios.forEach((el) => {
      if(el.nome == usuario.nome && el.senha == usuario.senha) {
        this.usuarioAutenticado = true;
      }
    });

    if(this.usuarioAutenticado)
      console.log('Usuário ' + usuario.nome + ' autenticado com sucesso.')
    else
      console.log('Erro ao autenticar usuário.')
  }
}
