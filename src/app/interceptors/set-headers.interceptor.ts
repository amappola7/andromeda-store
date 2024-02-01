import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class SetHeadersInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('AS_access-token');
    const headers: HttpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    });
    const newRequest = request.clone({
      headers: headers
    })
    return next.handle(newRequest);
  }
}
