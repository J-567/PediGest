import { Injectable } from '@angular/core';
import { Camarero } from '../model/camarero';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CamareroService {

  URL = 'http://10.250.5.4:8086/api/camareros/';

  constructor(private http:HttpClient) { }

  getAll():Observable<Camarero[]>{
    return this.http.get<Camarero[]>(this.URL);
  }

  create(camarero:Camarero):Observable<Camarero>{
    return this.http.post<Camarero>(this.URL, camarero);
  }

}
