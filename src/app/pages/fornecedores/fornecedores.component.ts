import { Fornecedor } from './../../models/fornecedor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FornecedoresService } from './fornecedores.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoFornecedorComponent } from './modal-info-fornecedor/modal-info-fornecedor.component';
import { FornecedorDTO } from 'src/app/models/dto/fornecedorDTO';
import { ModalFormFornecedorComponent } from './modal-form-fornecedor/modal-form-fornecedor.component';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  dataSource = new MatTableDataSource<FornecedorDTO>([]);
  displayedColumns: string[] = ['id', 'nome', 'categoria', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  listaDeFornecedores: FornecedorDTO[];

  constructor(
    private _fornecedorService: FornecedoresService,
    private dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {
    this._fornecedorService.buscaTodosFornecedores().subscribe(
      res => {
        this.listaDeFornecedores = res
        this.getTodosFornecedores()
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    this.dialog.open(ModalFormFornecedorComponent, {
      width: '30%',
      height: '35%'
    }).afterClosed().subscribe(() => this.ngOnInit());
  }

  detalhesFornecedor(element: Fornecedor) {
    this.dialog.open(ModalInfoFornecedorComponent, {
      width: '40%',
      data: element
    })
  }

  getTodosFornecedores() {
    this.dataSource = new MatTableDataSource<FornecedorDTO>(this.listaDeFornecedores);
    this.dataSource.paginator = this.paginator;
  }

  deletarFornecedor(element: Fornecedor) {
    this._fornecedorService.removerFornecedor(element).subscribe(() => this.ngOnInit());
  }
}
