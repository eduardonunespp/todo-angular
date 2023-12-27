import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Cache } from '../adapters';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authorizationService: AuthorizationService,
    private route: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = Cache.getSession({ key: 'accessToken' });

    if (accessToken !== null) {
      const authRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` },
      });

      return next.handle(authRequest).pipe(
        catchError((error) => {
          if (error.status === 401 || error.status === 403) {
            // Token expirado, deslogar usuário
            this.authorizationService.logOut();
            this.route.navigateByUrl('/');
          }
          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }
}
