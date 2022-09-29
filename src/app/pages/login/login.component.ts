import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/app/models/dto/usuarioDTO';
import { UsuarioFormDTO } from 'src/app/models/dto/usuarioFormDTO';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuarioForm: Usuario = new Usuario();
  public usuarioLogado: UsuarioDTO = new UsuarioDTO();
  public isUsuarioAutenticado: Boolean;
  public _listaDeUsuarios: Usuario[] = [];

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.buscaListaDeUsuarios().subscribe(res => {
      this.loginService._listaDeUsuarios = res;
      this._listaDeUsuarios = res;
    });
  }

  fazerLogin() {
    var usuarioFormDTO = UsuarioFormDTO.montaUsuarioFormDTO(this.usuarioForm);
    this.loginService.autenticaUsuario(usuarioFormDTO).subscribe(res => {
      this.usuarioLogado = res;
      this.loginService.processaAutenticacaoUsuario(this.usuarioLogado);
    });
  }
}
