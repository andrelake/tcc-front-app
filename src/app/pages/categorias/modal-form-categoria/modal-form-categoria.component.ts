import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-modal-form-categoria',
  templateUrl: './modal-form-categoria.component.html',
  styleUrls: ['./modal-form-categoria.component.css']
})
export class ModalFormCategoriaComponent implements OnInit {

  _categoriaForm !: FormGroup;
  _acaoBtn: string = 'Salvar';

  constructor(
    private categoriaService: CategoriaService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalFormCategoriaComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: Categoria) { }

  ngOnInit(): void {
    this._categoriaForm = this.formBuilder.group({
      nome: ['', Validators.required],
    })

    if(this.editData) {
      this._categoriaForm = this.formBuilder.group({
        id: [{value: '', disabled: true}, Validators.required],
        nome: ['', Validators.required],
        ativo: ['']
      })

      this._acaoBtn = 'Update';
      this._categoriaForm.controls['id'].setValue(this.editData.id);
      this._categoriaForm.controls['nome'].setValue(this.editData.nome);
      this._categoriaForm.controls['ativo'].setValue(this.editData.ativo);
    }
  }

  addCategoria() {
    if(!this.editData) {
      if(this._categoriaForm.valid) {
        this.categoriaService.salvarNovaCategoria(this._categoriaForm.value).subscribe(() => {
          alert('Categoria adicionada com sucesso');
          this._categoriaForm.reset();
          this.dialogRef.close();
        });
      }
      else {
        alert('Erro ao adicionar categoria');
      }
    }
    else {
      if(this._categoriaForm.valid) {
        this._categoriaForm.value['id'] = this._categoriaForm.controls['id'].value;

        this.categoriaService.atualizarCategoria(this._categoriaForm.value).subscribe(() => {
          alert('Categoria atualizada com sucesso');
          this.dialogRef.close();
        });
      }
      else {
        alert('Atualização inválida. Favor preencher o formulário corretamente.')
      }
    }
  }
}
