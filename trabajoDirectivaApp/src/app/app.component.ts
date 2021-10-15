import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje = "";
  registrado = false;
  nombre:string="";
  apellido:string="";
  cargo:string="";
  entradas: any;

  constructor(){
    this.entradas=[
      {titulo:"Python cada dia mas presente"},
      {titulo:"Brandon"},
      {titulo:"Eduardo"},
      {titulo:"Toapanta"},
      {titulo:"Jimenez"}
    ]
  }


  registrarUsuario() {
    this.registrado = true;

    this.mensaje = "Usuario registrado con éxito";

  }
}
