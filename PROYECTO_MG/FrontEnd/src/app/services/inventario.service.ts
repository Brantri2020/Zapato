import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventario } from '../models/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  url = 'http://localhost:3000/api/productos/';
  url2 = 'http://localhost:3000/api/productos2/';
  constructor(private http: HttpClient) { }

  getInventarios(): Observable<any>{
    return this.http.get(this.url);
  }

  eliminarInventario(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  guardarInventario(inventario: Inventario): Observable<any>{
    return this.http.post(this.url, inventario);
  }

  getInventariosOrdenado(filtro: string): Observable<any> {
    return this.http.get(this.url2 + filtro);

  }

  obtenerInventario(id: string): Observable<any>{
    return this.http.get(this.url + id);
  }
  editarInventario(id: string, inventario: Inventario): Observable<any>{
    return this.http.put(this.url + id, inventario);
  }
  buscarInventario(busqueda: string): Observable<any> {
    return this.http.get(this.url + "busqueda/"+busqueda);
  }

}
