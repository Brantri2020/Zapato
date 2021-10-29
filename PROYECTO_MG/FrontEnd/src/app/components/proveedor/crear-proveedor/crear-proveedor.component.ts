import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-crear-proveedor',
  templateUrl: './crear-proveedor.component.html',
  styleUrls: ['./crear-proveedor.component.css']
})
export class CrearProveedorComponent implements OnInit {

  proveedorForm: FormGroup;
  titulo = 'Crear proveedor';
  id: string | null;
  mensaje: string = "";

  
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _proveedorService: ProveedorService,
    private aRouter: ActivatedRoute){
      this.proveedorForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        cedula: ['', Validators.required],
        numeroCuenta: ['', Validators.required],
        diasPlazo: ['', Validators.required],
        telefono: ['', Validators.required],
        recibo: ['', Validators.required],
        banco: ['', Validators.required]
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
    }

    ngOnInit(): void {
      this.esEditar();
    }
  
    agregarProveedor() {
  
  
      const PROVEEDOR: Proveedor = {
        nombre: this.proveedorForm.get('nombre')?.value,
        apellido: this.proveedorForm.get('apellido')?.value,
        cedula: this.proveedorForm.get('cedula')?.value,
        numeroCuenta: this.proveedorForm.get('numeroCuenta')?.value,
        diasPlazo: this.proveedorForm.get('diasPlazo')?.value,
        telefono: this.proveedorForm.get('telefono')?.value,
        recibo: this.proveedorForm.get('recibo')?.value,
        banco: this.proveedorForm.get('banco')?.value

      }
  
      if (this.id !== null) {
        //editamos producto
        this._proveedorService.editarProveedor(this.id, PROVEEDOR).subscribe(data =>{
          this.toastr.success('El proveedor fue actualizado con éxito!', 'Proveedor Actualizado!');
          this.router.navigate(['/proveedores']);
        }, error => {
          console.log(error);
          this.mensaje = error.error;

          if (this.mensaje == "El proveedor con esta cédula ya esta registrado.") {
            var elemento: any = document.getElementById("cedulaId");
            elemento.className += " is-invalid";            
          }

        })
  
      } else {
        //agregamos producto
        console.log(PROVEEDOR);
        this._proveedorService.guardarProveedor(PROVEEDOR).subscribe(data => {
          this.toastr.success('El proveedor fue registrado con éxito!', 'Proveedor Registrado!');
          this.router.navigate(['/proveedores']);
        }, error => {
          console.log(error);
          this.mensaje = error.error;

          if (this.mensaje == "El proveedor con esta cédula ya esta registrado.") {
            var elemento: any = document.getElementById("cedulaId");
            elemento.className += " is-invalid";            
          }

        })
      }
  
  
  
  
    }
  
    esEditar() {
      if (this.id !== null) {
        this.titulo = 'Editar proveedor';
        this._proveedorService.obtenerProveedor(this.id).subscribe(data => {
          this.proveedorForm.setValue({
  
            nombre: data.nombre,
            apellido: data.apellido,
            cedula: data.cedula,
            numeroCuenta: data.numeroCuenta,
            diasPlazo: data.diasPlazo,
            telefono: data.telefono,
            recibo: data.recibo,
            banco: data.banco            

  
          })
        })
      }
    }
  
  }