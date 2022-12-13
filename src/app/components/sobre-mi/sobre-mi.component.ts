import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{

  sobreMi: any;

  constructor(private datos:DatosService) {}


  ngOnInit(): void{
    this.datos.getDatos().subscribe(data => {
      this.sobreMi = data.sobreMi;
    })
  }
}
