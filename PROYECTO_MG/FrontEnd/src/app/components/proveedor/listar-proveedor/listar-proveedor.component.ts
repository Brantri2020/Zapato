import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/models/proveedor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {
  listProveedores: Proveedor[] = [];
  listProveedores2: Proveedor[] = [];
  i=0;
  busquedaProvForm: FormGroup;

  constructor(private _proveedorService: ProveedorService,
    private toastr: ToastrService,
    private fb: FormBuilder) { 
      this.busquedaProvForm = this.fb.group({
        busqueda: ['', Validators.required]
      });
    }

  ngOnInit(): void {
    this.obtenerProveedores();
  }
  obtenerProveedores() {
    this._proveedorService.getProveedores().subscribe(data => {
      console.log(data);
      this.listProveedores = data;
    }, error => {
      console.log(error);
    })
  }

  ordenar(filtro: string) {
    this._proveedorService.getProveedoresOrdenado(filtro).subscribe(data => {
      
      this.i++;
      if(this.i % 2 == 0){
        
        this.listProveedores2 = data;
        this.listProveedores = this.listProveedores2.slice().reverse();
      }else{
        
        this.listProveedores = data;
      }
      


    }, error => {
      console.log(error);
    })
  }

  eliminarProveedor(id: any) {
    this._proveedorService.eliminarProveedor(id).subscribe(data => {
      this.toastr.error('El proveedor fue eliminado con éxito', 'Proveedor eliminado');
      this.obtenerProveedores();

    }, error => {
      console.log(error);
    })
  }


  buscarProveedor() {
    if(this.busquedaProvForm.get('busqueda')?.value==""){
      this.obtenerProveedores();
    }else{
    this._proveedorService.buscarProveedor(this.busquedaProvForm.get('busqueda')?.value).subscribe(data => {      
      this.listProveedores = data;
      

    }, error => {
      console.log(error);
    })
  }
  }

}
