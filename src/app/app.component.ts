import { Component, OnInit } from '@angular/core';
import { LoginService } from './pages/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tcc-front';

  //habilitar quando for codar front.
  usuarioLogado: boolean = false;

  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.usuarioLogado$.subscribe(res => this.usuarioLogado = res);
  }
}

