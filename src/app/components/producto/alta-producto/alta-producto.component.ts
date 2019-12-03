import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/model/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  producto:Producto = new Producto();
  categorias:string[] = undefined;

  constructor(private productoService:ProductoService,
              private router: Router) { }

  ngOnInit() {

    this.producto.descatalogado = false;

    this.productoService.getCategorias().subscribe(data =>{
      this.categorias = data;
      
    });
  }

  create():void{
    
    this.productoService.create(this.producto).subscribe(()=>{
      this.router.navigateByUrl('/listaproducto');
    });
  }
}
