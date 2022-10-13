import { Categoria } from "./categoria";
import { Fornecedor } from "./fornecedor";

export class Produto {
  id: number;
  nome: string;
  descricao: string;
  quantidade: number;
  precoUnitario: number;
  categoria: Categoria;
  fornecedor: Fornecedor;
  ativo: boolean;
}
