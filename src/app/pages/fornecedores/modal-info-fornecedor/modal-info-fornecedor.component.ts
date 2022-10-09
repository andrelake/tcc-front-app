import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria';
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
    private categoriaService: CategoriaService,
    private fornecedorService: FornecedoresService,
    @Inject(MAT_DIALOG_DATA) public editData: Fornecedor
  ) { }

  ngOnInit(): void {
    this.categoriaService.buscaTodasCategorias().subscribe(res => this.listaDeCategorias = res);

    this.fornecedorForm = this.formBuilder.group({
      nome: [{value: ''}, Validators.required],
      categoria: [{value: ''}, Validators.required],
    })

    if(this.editData) {
      this.fornecedorForm.controls['nome'].setValue(this.editData.nome);
      this.fornecedorForm.controls['categoria'].setValue(this.editData.categoria);
    }
  }

  atualizarFornecedor() {
    this.fornecedorService.atualizarFornecedor(this.editData).subscribe();
  }

}
