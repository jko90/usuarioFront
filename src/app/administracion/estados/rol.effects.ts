import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {RolService} from "../servicios/rol.service";
import {Router} from "@angular/router";
import {RolActions} from "./rol.actions";
import {catchError, EMPTY, map, mergeMap} from "rxjs";

@Injectable()
export class RolEffects{
  constructor(
    private accion: Actions,
    private rolServ: RolService,
    private ruta: Router
  ) {}

  rol$ = createEffect(() => {
    return this.accion.pipe(
      ofType(RolActions.GET_ROL_LIST),
      mergeMap(() => this.rolServ.obtenerRol().pipe(
        map(objRol => ({type: RolActions.SET_ROL_LIST, objRol})),
        catchError(() => EMPTY)
      ))
    )
  })

}
