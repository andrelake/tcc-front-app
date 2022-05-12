import { ProdutoService } from './../../../pages/produtos/produto.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Produto } from 'src/app/models/produto';
import { Categoria } from 'src/app/models/categoria';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  _produtoForm !: FormGroup;
  _listaDeCategorias: Categoria[] = [];
  _acaoBtn: string = 'Salvar';

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    @Inject(MAT_DIALOG_DATA) public editData: Produto
  ) { }

  ngOnInit(): void {
    this._listaDeCategorias = this.produtoService._listaDeCategorias;

    this._produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      quantidade: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      fornecedor: ['', Validators.required]
    })

    if(this.editData) {
      this._acaoBtn = 'Update';
      this._produtoForm.controls['nome'].setValue(this.editData.nome);
      this._produtoForm.controls['categoria'].setValue(this.editData.categoria);
      this._produtoForm.controls['quantidade'].setValue(this.editData.quantidade);
      this._produtoForm.controls['fornecedor'].setValue(this.editData.fornecedor);
    }
  }

  addProd() {
    if(this.editData) {
      if(this._produtoForm.valid) {
        this.produtoService.salvarNovoProduto(this._produtoForm.value);
        alert('Produto adicionado com sucesso');
        this._produtoForm.reset();
      }
      else {
        alert('Erro ao adicionar produto');
      }
    }
    else {
      // this.updateProduct();
    }
  }

}
