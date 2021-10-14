import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iriaun empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

nombre= "Juan";

apellido="Diaz";

edad=19;

//empresa="EPN";
/*
getEdad(){
  return this.edad;
}*/

llamaEmpresa(value:String){
  
}


  constructor() { }

  ngOnInit(): void {
  }

}
