import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { MustMatch } from 'src/app/services/must-match.validator';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;
  titulo = 'Crear usuario';
  id: string | null;
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute) { 
      this.usuarioForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        cedula: ['', Validators.required],
        direccion: ['', Validators.required],
        nombreUsuario: ['', Validators.required],
        password: ['', Validators.required],
        password2: ['', Validators.required],
        rol: ['', Validators.required]
      }, {
        validator: MustMatch('password', 'password2')
    });
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarUsuario() {
  
  
    const USUARIO: Usuario = {
      nombre: this.usuarioForm.get('nombre')?.value,
      apellido: this.usuarioForm.get('apellido')?.value,
      cedula: this.usuarioForm.get('cedula')?.value,
      direccion: this.usuarioForm.get('direccion')?.value,
      nombreUsuario: this.usuarioForm.get('nombreUsuario')?.value,
      password: this.usuarioForm.get('password')?.value,
      password2: this.usuarioForm.get('password2')?.value,
      rol: this.usuarioForm.get('rol')?.value

    }

    if (this.id !== null) {
      //editamos producto
      this._usuarioService.editarUsuario(this.id, USUARIO).subscribe(data =>{
        this.toastr.success('El usuario fue actualizado con éxito!', 'Usuario Actualizado!');
        this.router.navigate(['/usuarios']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })

    } else {
      //agregamos producto
      console.log(USUARIO);
      this._usuarioService.guardarUsuario(USUARIO).subscribe(data => {
        this.toastr.success('El usuario fue registrado con éxito!', 'Usuario Registrado!');
        this.router.navigate(['/usuarios']);
      }, error => {
        console.log(error);
        this.usuarioForm.reset();
      })
    }




  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar usuario';
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({

          nombre: data.nombre,
          apellido: data.apellido,
          cedula: data.cedula,
          direccion: data.direccion,
          nombreUsuario: data.nombreUsuario,
          password: data.password,
          password2: data.password,
          rol: data.rol       


        })
      })
    }
  }


}
