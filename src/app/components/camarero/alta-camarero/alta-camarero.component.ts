import { Component, OnInit } from '@angular/core';
import { CamareroService } from 'src/app/services/camarero.service';
import { Camarero } from 'src/app/model/camarero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-camarero',
  templateUrl: './alta-camarero.component.html',
  styleUrls: ['./alta-camarero.component.css']
})
export class AltaCamareroComponent implements OnInit {

  camarero:Camarero = new Camarero();

  constructor(private camareroService:CamareroService,
              private router:Router) { }

  ngOnInit() {
  }

  create(){
    this.camareroService.create(this.camarero).subscribe(() => 
      this.router.navigateByUrl('/listacamarero'));
    }
}
