import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {


  pedidoDetallado:Pedido = undefined;
  totalPedido:Number = undefined;

  constructor(private pedidoService:PedidoService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(data => {

      this.pedidoService.getById(Number(data.codigo)).subscribe(datos => {
        
        this.pedidoDetallado = datos;
        this.totalPedido = this.pedidoService.getTotal(datos);
      });
    });

    
    
  }



}
