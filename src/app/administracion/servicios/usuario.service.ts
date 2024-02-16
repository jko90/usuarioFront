import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {usuario} from "../modelos/usuario.interface";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  obtenerUsuario(): Observable<usuario[]>{
    return this.http.get<usuario[]>(' ${environment.apiUrl}/usuario').pipe(
      tap((dato:usuario[]) => dato),
      catchError((err => throwError(() => err)))
    );
  }
}
