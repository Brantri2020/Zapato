import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  obtenerTareas(){
    return this.http.get<any>(this.URL + '/tasks');
  }
  obtenerInicio(){
    return this.http.get<any>(this.URL + '/private-tasks');
  }
}
