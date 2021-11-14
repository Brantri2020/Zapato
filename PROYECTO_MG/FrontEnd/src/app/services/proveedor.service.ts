import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  url = 'http://localhost:3000/api/proveedores/';
  i = 0;

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<any> {
    return this.http.get(this.url);
  }
  getProveedoresOrdenado(filtro: string): Observable<any> {
    return this.http.get(this.url + filtro);

  }

  eliminarProveedor(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarProveedor(proveedor: Proveedor): Observable<any> {
    return this.http.post(this.url, proveedor);
  }

  obtenerProveedor(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }
  editarProveedor(id: string, proveedor: Proveedor): Observable<any> {
    return this.http.put(this.url + id, proveedor);
  }

  buscarProveedor(busqueda: string): Observable<any> {
    return this.http.get(this.url + "busqueda/"+busqueda);
  }
}
