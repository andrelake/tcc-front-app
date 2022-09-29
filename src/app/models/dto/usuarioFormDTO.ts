import { Usuario } from 'src/app/models/usuario';

export class UsuarioFormDTO {
  username: string;
  senha: string;

  public static montaUsuarioFormDTO(usuario: Usuario): UsuarioFormDTO {
    var dto = new UsuarioFormDTO();
    dto.username = usuario.username;
    dto.senha = usuario.senha;

    return dto;
  }
}
