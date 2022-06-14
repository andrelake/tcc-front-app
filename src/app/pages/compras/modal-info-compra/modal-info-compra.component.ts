import { ProdutoService } from './../../produtos/produto.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categoria';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Compra } from 'src/app/models/compra';

@Component({
  selector: 'app-modal-info-compra',
  templateUrl: './modal-info-compra.component.html',
  styleUrls: ['./modal-info-compra.component.css']
})
export class ModalInfoCompraComponent implements OnInit {

  _compraForm !: FormGroup;
  _listaDeCategorias: Categoria[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private dialogRef: MatDialogRef<ModalInfoCompraComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: Compra
  ) { }

  ngOnInit(): void {
    this._listaDeCategorias = this.produtoService._listaDeCategorias;

    this._compraForm = this.formBuilder.group({
      id: [{value: '', disabled: true}, Validators.required],
      nf: [{value: '', disabled: true}, Validators.required],
      fornecedor: [{value: '', disabled: true}, Validators.required],
      categoria: [{value: '', disabled: true}, Validators.required],
      valor: [{value: '', disabled: true}, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })

    if(this.editData) {
      // this._acaoBtn = 'Update';
      this._compraForm.controls['id'].setValue(this.editData.id);
      this._compraForm.controls['nf'].setValue(this.editData.nf);
      this._compraForm.controls['fornecedor'].setValue(this.editData.fornecedor.nome);
      this._compraForm.controls['categoria'].setValue(this.editData.categoria.nome);
      this._compraForm.controls['valor'].setValue(this.editData.valor);
    }
  }

}
