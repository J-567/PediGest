import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL = 'http://10.250.5.4:8086/api/pedidos/';

  constructor(private http:HttpClient) { }

  getAll():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.URL);
  }

  create(pedido:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.URL, pedido);
  }

  getById(codigo:number):Observable<Pedido>{
    return this.http.get<Pedido>(this.URL + codigo);
  }

}
