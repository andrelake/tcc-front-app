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

  _listaDeCompras: Compra[] = [
    {
      id: 1,
      nf: 100,
      fornecedor: 'Faber-Castel',
      categoria: 'Material de escritório',
      valor: 1500.00
    },
    {
      id: 2,
      nf: 101,
      fornecedor: 'Bic',
      categoria: 'Material de escritório',
      valor: 2000.00,
    },
  ];

  constructor(
    private http: HttpClient
  ) { }

  public post_SolicitarCompra(produto) {
    // this.http.post(`${this.apiURL}/compras/solicitarCompra`, produto);
  }
}