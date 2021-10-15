import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqui iriaun empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre = "Juan";

  apellido = "Diaz";

  edad = 19;

  //empresa="EPN";
  /*
  getEdad(){
    return this.edad;
  }*/

  llamaEmpresa(value: String) {

  }


  habilitacionCuadro = true;
  usuRegistrado = true;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistrado(event: Event){
    //alert("El usuario se acaba de registrar");
    //this.textoDeRegistro="El usuario se acaba de registrar";

    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario se acaba de registrar";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
