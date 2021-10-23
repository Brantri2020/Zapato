import { Component, OnInit } from '@angular/core';
import { InicioService } from 'src/app/services/inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  tasks = [{"_id":"","name":"","description":""}];

  constructor(private inicioService: InicioService) { }

  ngOnInit(): void {
    this.inicioService.obtenerInicio().subscribe(res => {
      console.log(res);
      this.tasks = res;
    },err => console.log(err))
  }

}
