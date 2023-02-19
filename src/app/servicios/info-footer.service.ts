import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { infoFooter } from '../model/infofooter.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoFooterService {
  httpOpcions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  url = 'http://localhost:8080/experiencia/'
  constructor(private http: HttpClient) { }

  public lista(): Observable<infoFooter[]> {
    return this.http.get<infoFooter[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<infoFooter> {
    return this.http.get<infoFooter>(this.url + `detalle/${id}`);
  }

  public crear(infofooter: infoFooter): Observable<any> {
    return this.http.post(this.url + 'crear', infofooter, this.httpOpcions);
  }

  public editar(infofooter: infoFooter, id: number): Observable<any> {
    return this.http.put<any>(this.url + `editar/${id}`, infofooter, this.httpOpcions);
  }
  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`, this.httpOpcions);
  }
}
