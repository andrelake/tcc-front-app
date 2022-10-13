import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria';
import { FornecedorDTO } from 'src/app/models/dto/fornecedorDTO';
import { Fornecedor } from 'src/app/models/fornecedor';

import { CategoriaService } from '../../categorias/categoria.service';
import { FornecedoresService } from '../fornecedores.service';

@Component({
  selector: 'app-modal-info-fornecedor',
  templateUrl: './modal-info-fornecedor.component.html',
  styleUrls: ['./modal-info-fornecedor.component.css']
})
export class ModalInfoFornecedorComponent implements OnInit {

  fornecedorForm !: FormGroup;
  listaDeCategorias: Categoria[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ModalInfoFornecedorComponent>,
    private categoriaService: CategoriaService,
    private fornecedorService: FornecedoresService,
    @Inject(MAT_DIALOG_DATA) public editData: Fornecedor
  ) { }

  ngOnInit(): void {
    this.categoriaService.buscaTodasCategorias().subscribe(
      res => this.listaDeCategorias = res.sort((a,b) => a.nome.toLowerCase() > b.nome.toLowerCase() ? 1 : -1));

    this.fornecedorForm = this.formBuilder.group({
      id: [{value: '', disabled: true}],
      nome: [{value: ''}, Validators.required],
      categoria: [{value: ''}, Validators.required],
      ativo: [{value: ''}]
    })

    if(this.editData) {
      this.fornecedorForm.controls['id'].setValue(this.editData.id);
      this.fornecedorForm.controls['nome'].setValue(this.editData.nome);
      this.fornecedorForm.controls['categoria'].setValue(this.editData.categoria);
      this.fornecedorForm.controls['ativo'].setValue(this.editData.ativo);
    }
  }

  atualizarFornecedor() {
    var fornecedorForm: FornecedorDTO = {
      id: this.editData.id,
      nome: this.fornecedorForm.value.nome,
      categoria: this.fornecedorForm.value.categoria,
      ativo: this.fornecedorForm.value.ativo
    }

    this.fornecedorService.atualizarFornecedor(fornecedorForm).subscribe(
      () => {
        alert('Fornecedor atualizado com sucesso');
        this.dialogRef.close();
    });
  }
}
