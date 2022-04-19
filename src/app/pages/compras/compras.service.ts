import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  solicitarCompraProd$: EventEmitter<number> = new EventEmitter();
  solicitacaoDeCompraPorId: boolean = false;

  constructor() { }
}
