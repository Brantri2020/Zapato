import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

    constructor(private servicioVentanaEmergente: ServicioEmpleadosService){

    }

    empleados: Empleado[] = [

        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Brandon", "Perez", "Director", 8000),
        new Empleado("Andres", "Abad", "Vicepresidente", 5000),
        new Empleado("Milton", "Zapata", "Auditor", 3000),
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: "+ "\n"+
        empleado.nombre+"\n"+"Salario: "+empleado.salario);
        this.empleados.push(empleado)

      }
}