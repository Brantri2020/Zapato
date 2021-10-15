import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado empleados';

empleados:Empleado[]=[

  new Empleado("Juan","Diaz","Presidente",7500),
  new Empleado("Brandon","Perez","Director",8000),
  new Empleado("Andres","Abad","Vicepresidente",5000),
  new Empleado("Milton","Zapata","Auditor",3000),

];

agregarEmpleado(){
  let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  this.empleados.push(miEmpleado)
}


cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0;

}
