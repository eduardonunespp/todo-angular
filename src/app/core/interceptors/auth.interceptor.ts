import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cache } from '../adapters';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = Cache.getSession({ key: 'accessToken' });

    if (accessToken !== null) {
      const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` },
      });

      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}
