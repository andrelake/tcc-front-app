import { Produto } from "../produto";

export class ProdutoFormDTO {
  id: number;
  nome: string;
  descricao: string;
  precoUnitario: number;
  quantidade: number;
  categoria: string;
  fornecedor: string;

  public static montaProdutoFormDTO(produto: Produto): ProdutoFormDTO {
    var dto = new ProdutoFormDTO();
    dto.nome = produto.nome;
    dto.descricao = produto.descricao;
    dto.precoUnitario = produto.precoUnitario;
    dto.quantidade = produto.quantidade;
    dto.categoria = produto.categoria.nome;
    dto.fornecedor = produto.fornecedor.nome;

    return dto;
  }
}
