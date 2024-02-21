import {HttpHandler, HttpInterceptor, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class CabeceraInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const autorizacion : string = localStorage.getItem('tkn') ?
      `Bearer ${localStorage.getItem('tkn')}` : ''
    if(req.url.includes("api")){
      return next.handle(req.clone({
          setHeaders: { autorizacion }
        }));
    }else{
      return next.handle(req);
    }
  }

}
