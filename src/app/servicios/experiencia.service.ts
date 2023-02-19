import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url= 'http://localhost:8080/experiencia/'
  constructor(private http:HttpClient) { }

  public lista(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.url + 'lista');
  }

  public getById(id: number):Observable<Experiencia>{
    return this.http.get<Experiencia>(this.url + `detalle/${id}`);
  }

    public crear(experiencia: Experiencia):Observable<any>{
    return this.http.post(this.url + 'crear', experiencia);
  }

        public editar(experiencia: Experiencia, id: number):Observable<any>{
    return this.http.put<any>(this.url + `editar/${id}`, experiencia);
  }
        public borrar(id: number):Observable<any>{
    return this.http.delete<any>(this.url + `borrar/${id}`);
  }
}
