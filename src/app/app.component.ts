import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: MenuItem[];

  ngOnInit() {
    this.items = [{
        label: 'Camareros',
        items: [
            {label: 'Alta', icon: 'pi pi-fw pi-user-plus', routerLink: ['/altacamarero']},
            {label: 'Lista', icon: 'pi pi-fw pi-list', routerLink: ['/listacamarero']}
        ]
    },
    {
        label: 'Producto',
        items: [
            {label: 'Alta', icon: 'pi pi-fw pi-plus', routerLink: ['/altaproducto']},
            {label: 'Lista', icon: 'pi pi-fw pi-list', routerLink: ['/listaproducto']}
        ]
    },
    {
        label: 'Pedido',
        items: [
            {label: 'Alta', icon: 'pi pi-fw pi-pencil', routerLink: ['/altapedido']},
            {label: 'Lista', icon: 'pi pi-fw pi-list', routerLink: ['/listapedido']}
        ]
    }];
}
}

