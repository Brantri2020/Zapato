import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  
  mensaje: string = "";

  constructor(public authService: AuthService) { 
   
  }

  ngOnInit(): void {
    
  }
  //Cerrar sesión al cerrar ventana
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    localStorage.clear();
  }

 recibirMensaje(mensaje: any){
   this.mensaje=mensaje;
 }

}
