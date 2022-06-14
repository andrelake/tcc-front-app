import { Categoria } from "./categoria";
import { Endereco } from "./endereco";

export class Fornecedor {
  id: number;
  nome: string;
  categoria: Categoria;
  endereco: Endereco;
}
