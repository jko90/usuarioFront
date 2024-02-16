import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PieComponent} from './diseño/pie/pie.component';
import {BarrHerramientaComponent} from './diseño/barr-herramienta/barr-herramienta.component';
import {CabeceraComponent} from './diseño/cabecera/cabecera.component';
import { PrincipalComponent } from './diseño/principal/principal.component';
import {RouterModule, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    PieComponent,
    BarrHerramientaComponent,
    CabeceraComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PieComponent,
    BarrHerramientaComponent,
    CabeceraComponent
  ]
})
export class CompartidoModule {
}
