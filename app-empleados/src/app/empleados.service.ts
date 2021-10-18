import { Empleado } from "./empleado.model";

export class EmpleadosService{

    empleados: Empleado[] = [

        new Empleado("Juan", "Diaz", "Presidente", 7500),
        new Empleado("Brandon", "Perez", "Director", 8000),
        new Empleado("Andres", "Abad", "Vicepresidente", 5000),
        new Empleado("Milton", "Zapata", "Auditor", 3000),
    
      ];

      agregarEmpleadoServicio(empleado:Empleado){
      this.empleados.push(empleado)

      }
}