import { Component, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) { }

  //Cerrar sesión al cerrar ventana
  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    localStorage.clear();
  }

}
