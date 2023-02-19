import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  httpOpcions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }
  url = 'http://localhost:8080/experiencia/'
  constructor(private http: HttpClient) { }

  public lista(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url + 'lista');
  }

  public getById(id: number): Observable<Persona> {
    return this.http.get<Persona>(this.url + `detalle/${id}`);
  }

  public crear(persona: Persona): Observable<any> {
    return this.http.post(this.url + 'crear', persona, this.httpOpcions);
  }

  public editar(persona: Persona, id: number): Observable<any> {
    return this.http.put<any>(this.url + `editar/${id}`, persona, this.httpOpcions);
  }
  public borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `borrar/${id}`, this.httpOpcions);
  }
}

