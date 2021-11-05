import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {

  listInventarios: Inventario[] = [];
  constructor(private _inventarioService: InventarioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerInventarios();
  }

  obtenerInventarios(){
    this._inventarioService.getInventarios().subscribe(data =>{
      console.log(data);
      this.listInventarios= data;
    },error =>{
      console.log(error);
    })
  }

  eliminarInventario(id:any){
    this._inventarioService.eliminarInventario(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con éxito', 'Producto eliminado');
      this.obtenerInventarios();

    }, error =>{
      console.log(error);
    })
  }


}
