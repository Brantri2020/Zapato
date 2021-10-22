import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PublicoComponent } from './components/publico/publico.component';
import { RegistroComponent } from './components/registro/registro.component';

//components
const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'inicio' , component: InicioComponent},
  { path: 'login' , component: LoginComponent},
  { path: 'registro' , component: RegistroComponent},
  { path: 'publico' , component: PublicoComponent},
  { path: '**' , redirectTo:'', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
