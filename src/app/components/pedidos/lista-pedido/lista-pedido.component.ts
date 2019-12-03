import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.css']
})
export class ListaPedidoComponent implements OnInit {

  pedidos:Pedido[]= undefined;
  
  constructor(private pedidoService:PedidoService,
              private router: Router) { }

  ngOnInit() {

    this.pedidoService.getAll().subscribe(data =>{
      this.pedidos = data;
    });

  }

  detallePedido(codigo:number){
    this.router.navigateByUrl('/detallepedido/' + codigo)
  }
}
