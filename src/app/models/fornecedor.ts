import { Categoria } from './categoria';
import { Produto } from './produto';

export class Fornecedor {
  id: number;
  nome: string;
  categoria: Categoria;
  listaProdutos: Produto[];
  ativo: boolean;
}
