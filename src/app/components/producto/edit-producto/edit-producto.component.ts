import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {

  codigo:number = undefined;
  editedProducto:Producto = undefined;
  categorias:string[] = undefined;

  constructor(private productoService: ProductoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.productoService.getCategorias().subscribe(data =>{
      this.categorias = data;
      
    });
    
    this.route.params.subscribe(data => {
      this.productoService.read(Number(data.codigo)).subscribe(datos => {
        this.editedProducto = datos;
      });
    })
  }

  update(){
    this.productoService.update(this.editedProducto).subscribe(()=>{
      this.router.navigateByUrl('/listaproducto');
    });
  }
}
