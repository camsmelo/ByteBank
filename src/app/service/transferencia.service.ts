import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../model/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[]
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transf: Transferencia): Observable<Transferencia> {
    this.hidratar(transf)
    return this.httpClient.post<Transferencia>(this.url, transf)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}

