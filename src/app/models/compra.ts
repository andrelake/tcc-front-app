import { Categoria } from './categoria';
import { Fornecedor } from './fornecedor';

export class Compra {
  id: number;
  nf: number;
  fornecedor: Fornecedor;
  categoria: Categoria;
  valor: number;
}
