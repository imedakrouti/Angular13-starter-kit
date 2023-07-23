import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './../_services/storage.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private StorageService:StorageService) {
    
   }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const accessToken = this.StorageService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + accessToken
      }
    });
    return next.handle(request);
  }
}
