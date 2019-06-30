import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
 } from '@angular/common/http';
 import { Observable, throwError } from 'rxjs';
 import { retry, catchError } from 'rxjs/operators';
 
 export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // server-side error
            if (error.status === 400) {
              errorMessage = 'Data not found. Please try again';
            } else if (error.status === 403) {
              errorMessage = 'Too many requests. Please wait for a while and try again';
            } else {
              errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
        })
      )
  }
 }