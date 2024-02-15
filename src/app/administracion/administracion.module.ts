import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolUiComponent } from './componentes/rol-ui/rol-ui.component';
import { RolUiListaComponent } from './componentes/rol-ui-lista/rol-ui-lista.component';
import { RolCreaComponent } from './paginas/rol-crea/rol-crea.component';
import { RolListaComponent } from './paginas/rol-lista/rol-lista.component';
import {CompartidoModule} from "../compartido/compartido.module";
import {MaterialModule} from "../material/material.module";



@NgModule({
 // declarations: [],
  imports: [
    CommonModule,
    CompartidoModule,
    MaterialModule
  ],
 declarations: [
   RolUiComponent,
   RolUiListaComponent,
   RolCreaComponent,
   RolListaComponent
 ],
 /** providers:[],
  exports:[],
  bootstrap:[],
  entryComponents:[],
  */
})
export class AdministracionModule { }
