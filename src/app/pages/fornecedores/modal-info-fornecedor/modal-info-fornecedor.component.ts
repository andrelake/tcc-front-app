import { Fornecedor } from 'src/app/models/fornecedor';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria';
import { ProdutoService } from '../../produtos/produto.service';

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
    private _produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public editData: Fornecedor
  ) { }

  ngOnInit(): void {
    this.listaDeCategorias = this._produtoService._listaDeCategorias;

    this.fornecedorForm = this.formBuilder.group({
      id: [{value: '', disabled: true}, Validators.required],
      nome: [{value: '', disabled: true}, Validators.required],
      categoria: [{value: '', disabled: true}, Validators.required],
      logradouro: [{value: '', disabled: true}, Validators.required],
      numero: [{value: '', disabled: true}, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      cidade: [{value: '', disabled: true}, Validators.required],
      sigla: [{value: '', disabled: true}, Validators.required],
    })

    if(this.editData) {
      // this._acaoBtn = 'Update';
      this.fornecedorForm.controls['id'].setValue(this.editData.id);
      this.fornecedorForm.controls['nome'].setValue(this.editData.nome);
      this.fornecedorForm.controls['categoria'].setValue(this.editData.categoria.nome);
      this.fornecedorForm.controls['logradouro'].setValue(this.editData.endereco.logradouro);
      this.fornecedorForm.controls['numero'].setValue(this.editData.endereco.numero);
      this.fornecedorForm.controls['cidade'].setValue(this.editData.endereco.cidade.nome);
      this.fornecedorForm.controls['sigla'].setValue(this.editData.endereco.cidade.estado.sigla);
    }
  }

}
