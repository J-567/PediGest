import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Router } from '@angular/router';
import { LineaPedido } from 'src/app/model/lineaPedido';
import { CamareroService } from 'src/app/services/camarero.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Camarero } from 'src/app/model/camarero';
import { Producto } from 'src/app/model/producto';

@Component({
  selector: 'app-alta-pedido',
  templateUrl: './alta-pedido.component.html',
  styleUrls: ['./alta-pedido.component.css']
})
export class AltaPedidoComponent implements OnInit {

  pedido:Pedido = new Pedido();
  lineasPedido:LineaPedido[] = [new LineaPedido()];
  camareros:Camarero[] = [];
  productos:Producto[] = [];

  constructor( private pedidoService:PedidoService, private router:Router,
               private camareroService:CamareroService,
               private productoService:ProductoService) { }

  ngOnInit() {
    this.camareroService.getAll().subscribe(data => {
      this.camareros = data;
    });

    this.productoService.getAll().subscribe(data => {
      this.productos = data;
    });
    
  }

  addLinea(){
    let lineaPedido = new LineaPedido();
    this.lineasPedido.push(lineaPedido);
  }

  getPrecio(lineaPedido:LineaPedido){
        this.productoService.getById(lineaPedido.producto.codigo).subscribe(producto => {
        lineaPedido.precio = producto.precio;
    });
  }

  removeLinea(lineaPedido:LineaPedido){
    let index = this.lineasPedido.indexOf(lineaPedido);
    this.lineasPedido.splice(index, 1);
   
  }

  create(){
    this.pedido.lineasPedido = this.lineasPedido;
    console.log(this.pedido);
    this.pedidoService.create(this.pedido).subscribe(()=>
      this.router.navigateByUrl('/listapedido')
    );
  }

}
