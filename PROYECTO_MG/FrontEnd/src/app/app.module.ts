import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PublicoComponent } from './components/publico/publico.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { CrearProveedorComponent } from './components/proveedor/crear-proveedor/crear-proveedor.component';
import { ListarProveedorComponent } from './components/proveedor/listar-proveedor/listar-proveedor.component';
import { CrearUsuarioComponent } from './components/usuario/crear-usuario/crear-usuario.component';
import { ListarUsuarioComponent } from './components/usuario/listar-usuario/listar-usuario.component';
import { CrearInventarioComponent } from './components/inventario/crear-inventario/crear-inventario.component';
import { ListarInventarioComponent } from './components/inventario/listar-inventario/listar-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    PublicoComponent,
    CrearProveedorComponent,
    ListarProveedorComponent,
    CrearUsuarioComponent,
    ListarUsuarioComponent,
    CrearInventarioComponent,
    ListarInventarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthGuard,
  { provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
