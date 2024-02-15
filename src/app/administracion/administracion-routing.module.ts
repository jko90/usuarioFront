import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RolListaComponent} from "./paginas/rol-lista/rol-lista.component";
import {RolCreaComponent} from "./paginas/rol-crea/rol-crea.component";

const rutas: Routes = [
  {
    path:"",
    component: RolListaComponent
  },
  {
    path:"rol",
    component: RolCreaComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
