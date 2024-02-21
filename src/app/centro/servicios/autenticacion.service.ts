import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http: HttpClient) { }

  login(dato:{usuUsuario: string, usuClave:string}):Observable<any>{
    return this.http.post<any>(`${environment.authUrl}/login`, dato).pipe(
      tap((dato:any) => dato),
      catchError((err => throwError(() => err)))
    )
  }
}
