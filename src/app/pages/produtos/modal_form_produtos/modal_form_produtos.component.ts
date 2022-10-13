import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria';
import { FornecedorDTO } from 'src/app/models/dto/fornecedorDTO';
import { Produto } from 'src/app/models/produto';

import { CategoriaService } from '../../categorias/categoria.service';
import { FornecedoresService } from '../../fornecedores/fornecedores.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-modal-form-produtos',
  templateUrl: './modal_form_produtos.component.html',
  styleUrls: ['./modal_form_produtos.component.css']
})
export class ModalFormProdutosComponent implements OnInit {

  _produtoForm !: FormGroup;
  _listaDeCategorias: Categoria[] = [];
  _listaDeFornecedores: FornecedorDTO[] = [];
  _acaoBtn: string = 'Salvar';

  currency = "\^([\\d]{0,8})(\\.|$)([\\d]{2,2}|)$"

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private fornecedorService: FornecedoresService,
    private categoriaService: CategoriaService,
    private dialogRef: MatDialogRef<ModalFormProdutosComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: Produto
  ) { }

  ngOnInit(): void {
    this.fornecedorService.buscaTodosFornecedores().subscribe(res => {
      this._listaDeFornecedores = res.filter(res => res.ativo);

      this.categoriaService.buscaTodasCategorias().subscribe(res => this._listaDeCategorias = res.filter(res => res.ativo));
    })

    this._produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      quantidade: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      precoUnitario: ['', [Validators.required, Validators.pattern(this.currency)]],
      categoria: ['', Validators.required],
      fornecedor: ['', Validators.required]
    })

    if(this.editData) {
      this._produtoForm = this.formBuilder.group({
        id: [{value: '', disabled: true}, Validators.required],
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        quantidade: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
        precoUnitario: ['', [Validators.required, Validators.pattern(this.currency)]],
        categoria: ['', Validators.required],
        fornecedor: ['', Validators.required],
        ativo: ['']
      })

      this._acaoBtn = 'Update';
      this._produtoForm.controls['id'].setValue(this.editData.id);
      this._produtoForm.controls['nome'].setValue(this.editData.nome);
      this._produtoForm.controls['descricao'].setValue(this.editData.descricao);
      this._produtoForm.controls['quantidade'].setValue(this.editData.quantidade);
      this._produtoForm.controls['precoUnitario'].setValue(this.editData.precoUnitario);
      this._produtoForm.controls['categoria'].setValue(this.editData.categoria);
      this._produtoForm.controls['fornecedor'].setValue(this.editData.fornecedor);
      this._produtoForm.controls['ativo'].setValue(this.editData.ativo);
    }
  }

  addProd() {
    if(!this.editData) {
      if(this._produtoForm.valid) {
        this.produtoService.salvarNovoProduto(this._produtoForm.value).subscribe(() => {
          alert('Produto adicionado com sucesso');
          this._produtoForm.reset();
          this.dialogRef.close();
        });
      }
      else {
        alert('Erro ao adicionar produto');
      }
    }
    else {
      if(this._produtoForm.valid) {
        this._produtoForm.value['id'] = this._produtoForm.controls['id'].value;
        this.produtoService.atualizarProduto(this._produtoForm.value).subscribe(() => {
          alert('Produto atualizado com sucesso');
          this.dialogRef.close();
        });
      }
    }
  }
}
