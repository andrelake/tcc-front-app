import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.usuarioLogado$.subscribe(res => {
      this.usuarioLogado = res

      if(this.loginService.usuarioLogado != null)
        this.isAdmin = this.loginService.usuarioLogado.isAdmin;
    });
  }

  logout() {
    this.usuarioLogado = false
    this.loginService.usuarioLogado$.emit(false);
    this.router.navigate(['']);
  }
}

