import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { CrearProveedorComponent } from './components/proveedor/crear-proveedor/crear-proveedor.component';
import { ListarProveedorComponent } from './components/proveedor/listar-proveedor/listar-proveedor.component';
import { PublicoComponent } from './components/publico/publico.component';
import { CrearUsuarioComponent } from './components/usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';

//components
const routes: Routes = [
  { path: '' , component: LoginComponent},
  { path: 'inicio' , component: InicioComponent, canActivate: [AuthGuard]},
  { path: 'login' , component: LoginComponent},
  { path: 'publico' , component: PublicoComponent, canActivate: [AuthGuard]},
  { path: 'proveedores' , component: ListarProveedorComponent, canActivate: [AuthGuard]},
  { path: 'crear-proveedor' , component: CrearProveedorComponent, canActivate: [AuthGuard]},
  { path: 'editar-proveedor/:id' , component: CrearProveedorComponent, canActivate: [AuthGuard]},
  { path: 'usuarios' , component: ListarUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'crear-usuario' , component: CrearUsuarioComponent, canActivate: [AuthGuard]},
  { path: 'editar-usuario/:id' , component: CrearUsuarioComponent, canActivate: [AuthGuard]},
  { path: '**' , redirectTo:'', pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
