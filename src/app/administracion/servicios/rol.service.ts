import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {rol} from "../modelos/rol.interface";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http:HttpClient) { }

  obtenerRol(): Observable<rol[]>{
    return this.http.get<rol[]>(' ${environment.apiUrl}/rol').pipe(
      tap((dato:rol[]) => dato),
      catchError((err => throwError(() => err)))
    );
  }

}
