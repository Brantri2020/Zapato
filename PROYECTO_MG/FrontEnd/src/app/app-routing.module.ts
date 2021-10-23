import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PublicoComponent } from './components/publico/publico.component';
import { RegistroComponent } from './components/registro/registro.component';

//components
const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'inicio' , component: InicioComponent, canActivate: [AuthGuard]},
  { path: 'login' , component: LoginComponent},
  { path: 'registro' , component: RegistroComponent, canActivate: [AuthGuard]},
  { path: 'publico' , component: PublicoComponent, canActivate: [AuthGuard]},
  { path: '**' , redirectTo:'', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
