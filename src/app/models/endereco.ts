import { Cidade } from "./cidade";

export class Endereco {
  cep: number;
  logradouro: string;
  numero?: number;
  cidade: Cidade;
}
