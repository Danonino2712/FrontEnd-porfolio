import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio.interface';
import { DatosService } from 'src/app/servicios/datos.service';
import { EstudioService } from 'src/app/servicios/estudio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  educacion!:Estudio[]
  estudios: any;

  constructor(private servEdu: EstudioService) {}


  ngOnInit(): void{
    this.servEdu.getDatos().subscribe({next: data => {
      this.estudios = data.estudios;
  }})
  } 
}
 