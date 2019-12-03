import { Camarero } from './camarero';
import { LineaPedido } from './lineaPedido';

export class Pedido{

    id:number;
    camarero:Camarero;
    mesa:number;
    lineasPedido:LineaPedido[];
    fecha:Date;

}

