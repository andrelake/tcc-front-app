import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario = new Usuario();

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    this.loginService.autenticarUsuario(this.usuario);
  }
}
