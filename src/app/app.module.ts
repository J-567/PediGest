import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CamareroService } from './services/camarero.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaCamareroComponent } from './components/camarero/lista-camarero/lista-camarero.component';
import { AltaCamareroComponent } from './components/camarero/alta-camarero/alta-camarero.component';
import { AltaPedidoComponent } from './components/pedidos/alta-pedido/alta-pedido.component';
import { AltaProductoComponent } from './components/producto/alta-producto/alta-producto.component';
import { ListaPedidoComponent } from './components/pedidos/lista-pedido/lista-pedido.component';
import { ListaProductoComponent } from './components/producto/lista-producto/lista-producto.component';
import { HomeComponent } from './components/home/home.component';
import { EditProductoComponent } from './components/producto/edit-producto/edit-producto.component';
import { DetallePedidoComponent } from './components/detalle-pedido/detalle-pedido.component';


@NgModule({
  declarations: [
    AppComponent,
    AltaCamareroComponent,
    ListaCamareroComponent,
    AltaPedidoComponent,
    AltaProductoComponent,
    ListaPedidoComponent,
    ListaProductoComponent,
    HomeComponent,
    EditProductoComponent,
    DetallePedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CamareroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
