import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos:Producto[] = undefined;
  

  constructor(private productoService:ProductoService,
              private router : Router) { }

  ngOnInit() {
    this.productoService.getAll().subscribe(data => {
      this.productos = data;
    })
  }

  editar(codigo:number){
    this.router.navigateByUrl('/editproducto/' + codigo);
    
  }

}
