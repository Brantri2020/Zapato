import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
// componentes

import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { QuitarProductosComponent } from './components/quitar-productos/quitar-productos.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    QuitarProductosComponent,
    ListarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
