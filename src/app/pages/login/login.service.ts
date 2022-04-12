import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public _listaDeUsuarios: Usuario[] = [
  {
    nome: 'joao@gmail.com',
    senha: '123456'
  }
  ];

  public usuarioAutenticado: boolean = false;
  public mostrarMenu$ = new EventEmitter<boolean>();

  constructor(
    private router: Router
  ) { }

  get listaDeUsuarios() {
    return this._listaDeUsuarios;
  }

  public autenticarUsuario(usuario: Usuario) {
    this._listaDeUsuarios.forEach((el) => {
      if(el.nome == usuario.nome && el.senha == usuario.senha) {
        this.usuarioAutenticado = true;
        this.mostrarMenu$.emit(true);
      }
    });

    if(this.usuarioAutenticado) {
      console.log('Usuário ' + usuario.nome + ' autenticado com sucesso.')
      this.router.navigate(['/home']);
    }
    else {
      console.log('Erro ao autenticar usuário.')
      this.mostrarMenu$.emit(false);
    }
  }
}
