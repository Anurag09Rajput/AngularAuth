import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let bearerToken = localStorage.getItem("Bearer");
    if(bearerToken){
      let authRequest = request.clone({
        setHeaders:{
          Autherization: `Bearer${bearerToken}`
        }
      });
      return next.handle(authRequest);
    }
    return next.handle(request);
  }
}
