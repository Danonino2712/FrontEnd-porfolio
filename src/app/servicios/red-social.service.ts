import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { redSocial } from '../model/redSocial.interface';

@Injectable({
  providedIn: 'root'
})
export class RedSocialService {

  httpOpcions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  url = 'http://localhost:8080/experiencia/'
  constructor(private http: HttpClient) { }

  public lista(): Observable<redSocial[]> {
    return this.http.get<redSocial[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<redSocial> {
    return this.http.get<redSocial>(this.url + `detalle/${id}`);
  }

  public crear(redes: redSocial): Observable<any> {
    return this.http.post(this.url + 'crear', redes, this.httpOpcions);
  }

  public editar(redes: redSocial, id: number): Observable<any> {
    return this.http.put<any>(this.url + `editar/${id}`, redes, this.httpOpcions);
  }
  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`, this.httpOpcions);
  }
}
