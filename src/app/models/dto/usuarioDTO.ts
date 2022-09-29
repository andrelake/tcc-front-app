import { Usuario } from 'src/app/models/usuario';

export class UsuarioDTO {
  nomeCompleto: string;
  username: string;
  isAdmin: boolean;

  public static montaUsuarioDTO(usuario: Usuario): UsuarioDTO {
    var dto = new UsuarioDTO();
    dto.nomeCompleto = usuario.nomeCompleto;
    dto.username = usuario.username;
    dto.isAdmin = usuario.isAdmin;

    return dto;
  }
}
