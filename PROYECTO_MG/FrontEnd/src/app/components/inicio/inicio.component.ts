import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  mensaje: any = "";
  private daysArray = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  private monthsArray = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  private date = new Date();
  public hour: any;
  public minute!: string;
  public second!: string;
  public ampm!: string;
  public day!: string;
  public dia!: string;
  public mes!: string;
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.nombrar();
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    },1000);
    this.day = this.daysArray[this.date.getDay()];
    this.mes = this.monthsArray[this.date.getMonth()];
  }

  private updateDate(date: Date){
    const hours = date.getHours();
    this.ampm = hours >= 12? 'PM' : 'AM';
    this.hour = hours % 24;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour ;
    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();
    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' +seconds : seconds.toString();
    this.dia = this.date.getDate().toString();
  }


  nombrar(){
    
    this.mensaje=this.authService.getUsuario();

  }

}
