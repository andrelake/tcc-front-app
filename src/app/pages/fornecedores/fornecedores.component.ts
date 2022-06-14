import { Fornecedor } from './../../models/fornecedor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FornecedoresService } from './fornecedores.service';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  dataSource = new MatTableDataSource<Fornecedor>([]);
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'endereco', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  _listaDeFornecedores: Fornecedor[] = [];

  constructor(
    private _fornecedorService: FornecedoresService
  ) { }

  ngOnInit(): void {
    this.getTodosFornecedores();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getTodosFornecedores() {
    this.dataSource = new MatTableDataSource<Fornecedor>(this._fornecedorService._listaDeFornecedores);
    this.dataSource.paginator = this.paginator;
  }

  detalhesFornecedor(element: Fornecedor) {

  }

  deletarFornecedor(element: Fornecedor) {

  }

  atualizarTabela() {
    this.dataSource.data = this.dataSource.data;
  }
}
