import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { ToastrService } from 'ngx-toastr';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent implements OnInit {
  listProveedores: Proveedor[] = [];

  constructor(private _proveedorService: ProveedorService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProveedores();
  }
  obtenerProveedores(){
    this._proveedorService.getProveedores().subscribe(data =>{
      console.log(data);
      this.listProveedores= data;
    },error =>{
      console.log(error);
    })
  }

  eliminarProveedor(id:any){
    this._proveedorService.eliminarProveedor(id).subscribe(data => {
      this.toastr.error('El proveedor fue eliminado con éxito', 'Proveedor eliminado');
      this.obtenerProveedores();

    }, error =>{
      console.log(error);
    })
  }


}
