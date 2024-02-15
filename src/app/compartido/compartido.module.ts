import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PieComponent} from './diseño/pie/pie.component';
import {BarrHerramientaComponent} from './diseño/barr-herramienta/barr-herramienta.component';
import {CabeceraComponent} from './diseño/cabecera/cabecera.component';


@NgModule({
  declarations: [
    PieComponent,
    BarrHerramientaComponent,
    CabeceraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PieComponent,
    BarrHerramientaComponent,
    CabeceraComponent
  ]
})
export class CompartidoModule {
}
