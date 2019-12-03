import { Component, OnInit } from '@angular/core';
import { CamareroService } from 'src/app/services/camarero.service';
import { Camarero } from 'src/app/model/camarero';

@Component({
  selector: 'app-lista-camarero',
  templateUrl: './lista-camarero.component.html',
  styleUrls: ['./lista-camarero.component.css']
})
export class ListaCamareroComponent implements OnInit {

  camareros:Camarero[] = []; 

  constructor(private camareroService:CamareroService) { }

  ngOnInit() {
    this.camareroService.getAll().subscribe(data => {
      this.camareros = data;
    });
  }

}
