import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CompartidoModule} from "./compartido/compartido.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CabeceraInterceptor} from "./centro/interceptor/cabecera.interceptor";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  /**
   * Declaramos todos los componentes, directivas y pipes que forman parte del modulo, los componentes que se deben declarar en un solo módulo
   */
  declarations: [
    AppComponent
  ],
  /** Declaramos todos los módulos que se van a utilizar en los componentes */
  imports: [
    BrowserModule, // CommonModules ==> falta de importar
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]), // RouterOutlet, en caso de que existiera
  //  CompartidoModule
  ],
  /**  Declaramos los servicios que van a estar disponibles para la inyeccion de dependencias */
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass : CabeceraInterceptor, multi: true}
  ],
  /**  Declaramos todos los componentes, directivas y pipes que van a estar disponibles a otros módulos una vez que se importe */
  exports:[
  //  CompartidoModule
  ],
  /** Se define el componente p`rincipal del módulo, esto es utilizado principalmente para el módulo principal */
  bootstrap: [AppComponent],
  /** Declaramos los componentes que deberían ser cargados dinbamicamnete a la aplicación */
 // entryComponents:[]
})
export class AppModule { }
