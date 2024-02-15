import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolUiComponent } from './componentes/rol-ui/rol-ui.component';
import { RolUiListaComponent } from './componentes/rol-ui-lista/rol-ui-lista.component';
import { RolCreaComponent } from './paginas/rol-crea/rol-crea.component';
import { RolListaComponent } from './paginas/rol-lista/rol-lista.component';
import {CompartidoModule} from "../compartido/compartido.module";
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {AdministracionRoutingModule} from "./administracion-routing.module";
import {MatNativeDateModule} from "@angular/material/core";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {ToolbarModule} from "primeng/toolbar";


@NgModule({
 // declarations: [],
  imports: [
    CommonModule,
    CompartidoModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AdministracionRoutingModule,
    CardModule,
    InputTextModule,
    CalendarModule,
    ToolbarModule
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
