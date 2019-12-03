import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaCamareroComponent } from './components/camarero/alta-camarero/alta-camarero.component';
import { ListaCamareroComponent } from './components/camarero/lista-camarero/lista-camarero.component';
import { AltaProductoComponent } from './components/producto/alta-producto/alta-producto.component';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductoComponent } from './components/producto/edit-producto/edit-producto.component';
import { AltaPedidoComponent } from './components/pedidos/alta-pedido/alta-pedido.component';
import { ListaPedidoComponent } from './components/pedidos/lista-pedido/lista-pedido.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';


const routes: Routes = [
      {path:'', redirectTo: 'home', pathMatch: 'full'},  // redirección a com1 si el usuario no pone nada
      {path: 'altacamarero', component: AltaCamareroComponent},
      {path: 'listacamarero', component: ListaCamareroComponent},
      {path: 'altaproducto', component: AltaProductoComponent},
      {path: 'listaproducto', component: ListaProductoComponent},
      {path: 'editproducto/:codigo', component: EditProductoComponent},
      {path: 'altapedido', component: AltaPedidoComponent},
      {path: 'listapedido', component: ListaPedidoComponent},
      {path: 'detallepedido/:codigo', component: DetallePedidoComponent},
      {path: 'home', component: HomeComponent},
      {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
