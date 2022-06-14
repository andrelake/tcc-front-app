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
      fornecedor: {
        id: 1,
      nome: 'Faber-Castel',
      categoria: {
        id: 1,
        nome: 'Material de escritório'
      },
      endereco: {
        cep: 19900000,
        logradouro: 'Rua pipipi',
        numero: 123,
        cidade: {
          id: 1,
          nome: 'São Paulo',
          estado: {
            id: 1,
            nome: 'São Paulo',
            sigla: 'SP'
          }
        }
      }
      },
      categoria: {
        id: 1,
        nome: 'Material de escritório'
      },
      valor: 1500.00
    },
    {
      id: 2,
      nf: 101,
      fornecedor: {
        id: 2,
        nome: 'Bic',
        categoria: {
          id: 1,
          nome: 'Material de escritório'
        },
        endereco: {
          cep: 19900001,
          logradouro: 'Rua popopo',
          numero: 456,
          cidade: {
            id: 2,
            nome: 'Rio de Janeiro',
            estado: {
              id: 2,
              nome: 'Rio de Janeiro',
              sigla: 'RJ'
            }
          }
        }
      },
      categoria: {
        id: 1,
        nome: 'Material de escritório'
      },
      valor: 2000.00,
    },
  ];

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
