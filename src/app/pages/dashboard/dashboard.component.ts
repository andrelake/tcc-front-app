import { DashboardDTO } from './../../models/dto/dashboardDTO';
import { Component, OnInit } from '@angular/core';

import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardInfo: DashboardDTO;
  labelBotao: string = 'Gerar';
  dashGerado: boolean = false;

  constructor(
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    this.getDashboardInfo();
  }

  getDashboardInfo() {
    this.dashboardService.buscaDashboardInfo().subscribe(res => this.dashboardInfo = res);
  }

  abrirDashboard() {
    this.labelBotao = 'Atualizar';
    this.dashGerado = true;

    this.getDashboardInfo();
  }
}
