import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  
  mensaje: any = "";

  constructor(public authService: AuthService) { 
    this.mensaje=this.authService.getUsuario()?.toString;
  }

  ngOnInit(): void {
    
  }
  //Cerrar sesión al cerrar ventana
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    localStorage.clear();
  }

 

}
