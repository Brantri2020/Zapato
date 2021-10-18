import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

@Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCaracteristicas(value:string){
    this.caracteristicasEmpleados.emit(value);
  }

}
