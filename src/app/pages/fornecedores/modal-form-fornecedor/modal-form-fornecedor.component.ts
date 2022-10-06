import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria';
import { Fornecedor } from 'src/app/models/fornecedor';

import { CategoriaService } from '../../categorias/categoria.service';
import { FornecedoresService } from '../fornecedores.service';

@Component({
  selector: 'app-modal-form-fornecedor',
  templateUrl: './modal-form-fornecedor.component.html',
  styleUrls: ['./modal-form-fornecedor.component.css']
})
export class ModalFormFornecedorComponent implements OnInit {

  _fornecedorForm !: FormGroup;
  _listaDeCategorias: Categoria[] = [];
  _acaoBtn: string = 'Salvar';

  constructor(
    private formBuilder: FormBuilder,
    private fornecedorService: FornecedoresService,
    private categoriaService: CategoriaService,
    private dialogRef: MatDialogRef<ModalFormFornecedorComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: Fornecedor
  ) { }

  ngOnInit(): void {
    this._fornecedorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
    })

    if(this.editData) {
      this._fornecedorForm.controls['nome'].setValue(this.editData.nome);
      this._fornecedorForm.controls['categoria'].setValue(this.editData.categoria);
    }

    this.categoriaService.buscaTodasCategorias().subscribe(res => this._listaDeCategorias = res)
  }

  addFornecedor() {
    if(!this.editData) {
      if(this._fornecedorForm.valid) {
        this.fornecedorService.salvarNovoFornecedor(this._fornecedorForm.value).subscribe(() => {
          alert('Fornecedor adicionado com sucesso');
          this._fornecedorForm.reset();
          this.dialogRef.close();
        });
      }
      else {
        alert('Erro ao adicionar fornecedor');
      }
    }
  }
}
