import { Component, OnInit } from '@angular/core';
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { ComprasService } from 'src/app/pages/compras/compras.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  faCubeIcon = faCube;

  constructor(
    private compraService: ComprasService
  ) { }

  ngOnInit(): void {
  }

  inativaSolicitacaoCompraPorId() {
    this.compraService.solicitacaoDeCompraPorId = false;
  }
}
