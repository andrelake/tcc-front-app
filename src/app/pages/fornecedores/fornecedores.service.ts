import { Injectable } from '@angular/core';
import { Fornecedor } from 'src/app/models/fornecedor';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  _listaDeFornecedores: Fornecedor[] = [
    {
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
    {
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
  ];

  constructor() { }


  public removerFornecedor(element: Fornecedor) {
    let fornecedorSelecionado = this._listaDeFornecedores.find(fornecedor => fornecedor.id === element.id && fornecedor.nome === element.nome);
    this._listaDeFornecedores.splice(this._listaDeFornecedores.indexOf(fornecedorSelecionado), 1);
  }
}
