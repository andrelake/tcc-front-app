import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';

import { UsuarioService } from '../usuario-service.service';

@Component({
  selector: 'app-modal-form-usuario',
  templateUrl: './modal-form-usuario.component.html',
  styleUrls: ['./modal-form-usuario.component.css']
})
export class ModalFormUsuarioComponent implements OnInit {

  _usuarioForm !: FormGroup;
  _acaoBtn: string = 'Salvar';

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private dialog: MatDialogRef<ModalFormUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: Usuario
  ) { }

  ngOnInit(): void {
    this._usuarioForm = this.formBuilder.group({
      nomeCompleto: ['', Validators.required],
      username: ['', Validators.required],
      senha: ['', Validators.required],
      isAdmin: ['', [Validators.required]],
    })

    if(this.editData) {
      this._acaoBtn = 'Update';
      this._usuarioForm.controls['nomeCompleto'].setValue(this.editData.nomeCompleto);
      this._usuarioForm.controls['username'].setValue(this.editData.username);
      this._usuarioForm.controls['senha'].setValue(this.editData.senha);
      this._usuarioForm.controls['isAdmin'].setValue(this.editData.isAdmin);
    }
  }

  salvarUsuario() {
    if(!this.editData) {
      if(this._usuarioForm.valid) {
        this.usuarioService.salvarNovoUsuario(this._usuarioForm.value).subscribe(() => {
          alert('Usuário adicionado com sucesso');
          this._usuarioForm.reset();
          this.dialog.close();
        });
      }
      else {
        alert('Erro ao adicionar usuário');
      }
    }
  }
}
