import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado empleados';

  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService){

    //this.empleados=this.empleadosService.empleados;

  }
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  empleados: Empleado[] = [];

  agregarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.miServicio.muestraMensaje("Nombre del empleado: "+miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

  }


  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

}
