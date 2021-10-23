import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {

  tasks = [{"_id":"","name":"","description":""}];

  constructor(private inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.obtenerTareas().subscribe(res =>{
      console.log(res)
      this.tasks=res;
    }, err => console.log(err))
  }

}
