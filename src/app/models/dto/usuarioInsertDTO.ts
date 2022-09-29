import { Usuario } from 'src/app/models/usuario';

export class UsuarioInsertDTO {
  nomeCompleto: string;
  username: string;
  senha: string;
  isAdmin: boolean;

  public static montaUsuarioInsertDTO(usuario: Usuario): UsuarioInsertDTO {
    var dto = new UsuarioInsertDTO();
    dto.nomeCompleto = usuario.nomeCompleto;
    dto.username = usuario.username;
    dto.senha = usuario.senha;
    dto.isAdmin = usuario.isAdmin;

    return dto;
  }
}
