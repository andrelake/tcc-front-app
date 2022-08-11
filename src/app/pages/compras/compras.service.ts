import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from 'src/app/models/compra';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  solicitarCompraProd$: EventEmitter<Object> = new EventEmitter();
  solicitacaoDeCompraPorId: boolean = false;
  apiURL: string = 'http://localhost:8080/api'

  _listaDeCompras: Compra[] = [];

  constructor(
    private http: HttpClient
  ) { }

  public post_SolicitarCompra(produto) {
    // this.http.post(`${this.apiURL}/compras/solicitarCompra`, produto);
  }

  public removerCompra(element: Compra) {
    let compraSelecionada = this._listaDeCompras.find(compra => compra.nf === element.nf && compra.fornecedor === element.fornecedor);
    this._listaDeCompras.splice(this._listaDeCompras.indexOf(compraSelecionada), 1);
  }
}
