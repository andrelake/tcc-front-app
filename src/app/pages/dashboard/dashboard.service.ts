import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

import { DashboardDTO } from 'src/app/models/dto/dashboardDTO';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseURL: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public buscaDashboardInfo(): Observable<DashboardDTO> {
    return this.http.get<DashboardDTO>(`${this.baseURL}/dashboard`);
  }
}
