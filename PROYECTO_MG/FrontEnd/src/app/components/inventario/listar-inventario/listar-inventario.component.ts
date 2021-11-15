import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Inventario } from 'src/app/models/inventario';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {

  busquedaInvForm: FormGroup;
  listInventarios: Inventario[] = [];
  listInventarios2: Inventario[] = [];
  i=0;
  constructor(private _inventarioService: InventarioService,
    private toastr: ToastrService,
    private fb: FormBuilder) {
      this.busquedaInvForm = this.fb.group({
        busqueda: ['', Validators.required]
      });
     }

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

  ordenar(filtro: string) {
    this._inventarioService.getInventariosOrdenado(filtro).subscribe(data => {
      
      this.i++;
      if(this.i % 2 == 0){
        
        this.listInventarios2 = data;
        this.listInventarios = this.listInventarios2.slice().reverse();
      }else{
        
        this.listInventarios = data;
      }
      


    }, error => {
      console.log(error);
    })
  }

  buscarInventario() {
    if(this.busquedaInvForm.get('busqueda')?.value==""){
      this.obtenerInventarios();
    }else{
    this._inventarioService.buscarInventario(this.busquedaInvForm.get('busqueda')?.value).subscribe(data => {      
      this.listInventarios = data;
      

    }, error => {
      console.log(error);
    })
  }
  }

}
