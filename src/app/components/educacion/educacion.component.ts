import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  estudios: any;

  constructor(private datos:DatosService) {}


  ngOnInit(): void{
    this.datos.getDatos().subscribe(data => {
      this.estudios = data.estudios;
    })
  }
}
 