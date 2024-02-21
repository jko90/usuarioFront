import {Component, EventEmitter, OnInit} from '@angular/core';
import {rol} from "../../modelos/rol.interface";
import {Router} from "@angular/router";
import {Operaciones} from "../../operaciones/operaciones.enum";
import {RolService} from "../../servicios/rol.service";

@Component({
  selector: 'app-rol-lista',
  templateUrl: './rol-lista.component.html',
  styleUrls: ['./rol-lista.component.css']
})
export class RolListaComponent implements OnInit {

  formTitulo: string = "Gestión de sistemas";
  roles!: rol[];

  rol:EventEmitter<any> = new EventEmitter<{rol : rol, action:Operaciones}>();

  cabeceras: {
    cabecera: string, valorCabecera: keyof rol
  }[] = [
    {cabecera: "Id", valorCabecera: "rolId"},
    {cabecera: "Nombre", valorCabecera: "rolNombre"},
    {cabecera: "Sigla", valorCabecera: "rolSigla"},
    {cabecera: "Fecha modificación", valorCabecera: "rolFechmodifi"},
    {cabecera: "Estado", valorCabecera: "rolEstado"}
  ]

  constructor(
    private ruta: Router,
    private rolServ: RolService
  ) {
  }

  ngOnInit(): void {
  //  this.roles = this.rolServ.obtenerRol();
  }

  seleccionarRol(data:{rol : rol, action:Operaciones}) {}

}
