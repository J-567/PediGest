import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  URL = 'http://10.250.5.4:8086/api/productos/';
  URLcategorias = 'http://10.250.5.4:8086/api/categorias/';

  constructor(private http:HttpClient) { }

  getCategorias():Observable<any>{
    return this.http.get(this.URLcategorias)
  }

  getAll():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.URL);
  }

  getById(codigo:number):Observable<Producto>{
    return this.http.get<Producto>(this.URL + codigo);
  }

  create(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.URL, producto);
  }

  read(codigo:number):Observable<Producto>{
    return this.http.get<Producto>(this.URL+codigo);
  }

  update(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.URL, producto)
  }
  
}
