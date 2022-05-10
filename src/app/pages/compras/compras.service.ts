import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  solicitarCompraProd$: EventEmitter<Object> = new EventEmitter();
  solicitacaoDeCompraPorId: boolean = false;

  apiURL: string = 'http://localhost:8080/api'

  constructor(
    private http: HttpClient
  ) { }

  public post_SolicitarCompra(produto) {
    // this.http.post(`${this.apiURL}/compras/solicitarCompra`, produto);
  }
}
