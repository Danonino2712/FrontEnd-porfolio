import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  httpOpcions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  url = 'http://localhost:8080/experiencia/'
  constructor(private http: HttpClient) { }

  public lista(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Proyecto> {
    return this.http.get<Proyecto>(this.url + `detalle/${id}`);
  }

  public crear(proyecto: Proyecto): Observable<any> {
    return this.http.post(this.url + 'crear', proyecto, this.httpOpcions);
  }

  public editar(proyecto: Proyecto, id: number): Observable<any> {
    return this.http.put<any>(this.url + `editar/${id}`, proyecto, this.httpOpcions);
  }
  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`, this.httpOpcions);
  }
}
