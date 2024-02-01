import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SetHeadersInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('AS_access_token');
    const headers: HttpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    });
    const newRequest = request.clone({
      headers: headers
    })
    console.log('NEW REQUEST', newRequest);
    return next.handle(newRequest);
  }
}
