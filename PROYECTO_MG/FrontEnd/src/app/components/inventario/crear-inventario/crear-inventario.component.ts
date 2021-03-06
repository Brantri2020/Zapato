import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-crear-inventario',
  templateUrl: './crear-inventario.component.html',
  styleUrls: ['./crear-inventario.component.css']
})
export class CrearInventarioComponent implements OnInit {

  inventarioForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;
  mensaje: string = "";
  provee = [{"nombre":"","apellido":""}];


  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _inventarioService: InventarioService,
    private _proveedorService: ProveedorService,
    private aRouter: ActivatedRoute) {
      this.inventarioForm = this.fb.group({
        codigo: ['', Validators.required],
        descripcion: ['', Validators.required],
        talla: ['', Validators.required],
        stock: ['', Validators.required],
        precioUnitario: ['', Validators.required],
        proveedor: ['', Validators.required]
      });
      this.id = this.aRouter.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    //obtener proveedores
    this._proveedorService.getProveedores().subscribe(res =>{      
      this.provee=res;
    }, err => console.log(err))


    this.esEditar();
  }

  agregarInventario() {
  
  
    const INVENTARIO: Inventario = {
      codigo: this.inventarioForm.get('codigo')?.value,
      descripcion: this.inventarioForm.get('descripcion')?.value,
      talla: this.inventarioForm.get('talla')?.value,
      stock: this.inventarioForm.get('stock')?.value,
      precioUnitario: this.inventarioForm.get('precioUnitario')?.value,
      proveedor: this.inventarioForm.get('proveedor')?.value
     
    }

    if (this.id !== null) {
      //editamos producto
      this._inventarioService.editarInventario(this.id, INVENTARIO).subscribe(data =>{
        this.toastr.success('El inventario fue actualizado con ??xito!', 'Producto Actualizado!');
        this.router.navigate(['/productos']);
      }, error => {
        console.log(error);
        this.mensaje = error.error;

        if (this.mensaje == "El producto con este c??digo ya esta registrado.") {
          var elemento: any = document.getElementById("codigoId");
          elemento.className += " is-invalid";            
        }

      })

    } else {
      //agregamos producto
      console.log(INVENTARIO);
      this._inventarioService.guardarInventario(INVENTARIO).subscribe(data => {
        this.toastr.success('El producto fue registrado con ??xito!', 'Producto Registrado!');
        this.router.navigate(['/productos']);
      }, error => {
        console.log(error);
        this.mensaje = error.error;

        if (this.mensaje == "El producto con este c??digo ya esta registrado.") {
          var elemento: any = document.getElementById("codigoId");
          elemento.className += " is-invalid";            
        }

      })
    }




  }

  esEditar() {
    if (this.id !== null) {
      this.titulo = 'Editar producto';
      this._inventarioService.obtenerInventario(this.id).subscribe(data => {
        this.inventarioForm.setValue({

          codigo: data.codigo,
          descripcion: data.descripcion,
          talla: data.talla,
          stock: data.stock,
          precioUnitario: data.precioUnitario,
          proveedor: data.proveedor         


        })
      })
    }
  }

}
