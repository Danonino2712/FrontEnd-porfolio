import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../model/estudio.interface';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {
  httpOpcions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  url = 'http://localhost:8080/experiencia/'
  constructor(private http: HttpClient) { }

  public lista(): Observable<Estudio[]> {
    return this.http.get<Estudio[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Estudio> {
    return this.http.get<Estudio>(this.url + `detalle/${id}`);
  }

  public crear(estudio: Estudio): Observable<any> {
    return this.http.post(this.url + 'crear', estudio, this.httpOpcions);
  }

  public editar(estudio: Estudio, id: number): Observable<any> {
    return this.http.put<any>(this.url + `editar/${id}`, estudio, this.httpOpcions);
  }
  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`, this.httpOpcions);
  }
}
