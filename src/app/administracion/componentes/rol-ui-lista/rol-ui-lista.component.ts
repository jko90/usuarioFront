import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {rol} from "../../modelos/rol.interface";
import {Operaciones} from "../../operaciones/operaciones.enum";

@Component({
  selector: 'app-rol-ui-lista',
  templateUrl: './rol-ui-lista.component.html',
  styleUrls: ['./rol-ui-lista.component.css']
})
export class RolUiListaComponent implements OnInit{

  @Input() cabeceras: Array<{cabecera:string, valorCabecera: keyof rol}> = [];
  @Input() roles!: rol[];
  @Output() rols:EventEmitter<any> = new EventEmitter<{rols : rol, action:Operaciones}>();

  ngOnInit(): void {
  }



}
