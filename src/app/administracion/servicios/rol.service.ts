import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {rol} from "../modelos/rol.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) {
  }

  obtenerRol(): Observable<rol[]> {
    return this.http.get<rol[]>(`${environment.apiUrl}/rol`).pipe(
      tap((dato: rol[]) => dato),
      catchError((err => throwError(() => err)))
    );
  }

  obtenerRolId(id: number): Observable<rol> {
    return this.http.get<rol>(`${environment.apiUrl}/rol/${id}`).pipe(
      tap((dato: rol) => dato),
      catchError((err => throwError(() => err)))
    )
  }

  agregarRol(objRol: rol): Observable<rol> {
    return this.http.post<rol>(`${environment.apiUrl}/rol`, objRol).pipe(
      tap((dato: rol) => dato),
      catchError((err => throwError(() => err)))
    )
  }

  actualizarRol(id:number, objRol: rol):Observable<rol>{
    return this.http.put<rol>(`${environment.apiUrl}/rol/${id}`, objRol).pipe(
      tap((dato: rol) => dato),
      catchError((err => throwError(() => err)))
    )
  }

  eliminarRol(id:number): Observable<rol>{
    return this.http.delete<rol>(`${environment.apiUrl}/rol/${id}`).pipe(
      catchError((err => throwError(() => err)))
    )
  }

}
