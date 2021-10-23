import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  registro(usuario: { usuario: string; password: string; }): Observable<any>{
    return this.http.post(this.URL + '/registro', usuario);
  }

  loguear(usuario: { usuario: string; password: string; }): Observable<any>{
    return this.http.post(this.URL + '/login', usuario);
  }

  comprobarLogin(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    
    return localStorage.getItem('token');
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
