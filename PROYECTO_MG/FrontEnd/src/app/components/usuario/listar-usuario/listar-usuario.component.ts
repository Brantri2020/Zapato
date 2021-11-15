import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  busquedaUsuForm: FormGroup;
  listUsuarios: Usuario[] = [];
  listUsuarios2: Usuario[] = [];
  i=0;
  constructor(private _usuarioService: UsuarioService,
    private toastr: ToastrService,
    private fb: FormBuilder) { 
      this.busquedaUsuForm = this.fb.group({
        busqueda: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data =>{
      console.log(data);
      this.listUsuarios= data;
    },error =>{
      console.log(error);
    })
  }

  eliminarUsuario(id:any){
    this._usuarioService.eliminarUsuario(id).subscribe(data => {
      this.toastr.error('El usuario fue eliminado con éxito', 'Usuario eliminado');
      this.obtenerUsuarios();

    }, error =>{
      console.log(error);
    })
  }

  ordenar(filtro: string) {
    this._usuarioService.getUsuariosOrdenado(filtro).subscribe(data => {
      
      this.i++;
      if(this.i % 2 == 0){
        
        this.listUsuarios2 = data;
        this.listUsuarios = this.listUsuarios2.slice().reverse();
      }else{
        
        this.listUsuarios = data;
      }
      


    }, error => {
      console.log(error);
    })
  }

  buscarUsuario() {
    if(this.busquedaUsuForm.get('busqueda')?.value==""){
      this.obtenerUsuarios();
    }else{
    this._usuarioService.buscarUsuario(this.busquedaUsuForm.get('busqueda')?.value).subscribe(data => {      
      this.listUsuarios = data;
      

    }, error => {
      console.log(error);
    })
  }
  }

}
