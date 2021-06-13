import { Injectable } from '@angular/core';
import config from '../../../config/app.config'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MoviesInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let req = request.clone({
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + config.keys.movieDB
      })
    })
    return next.handle(req);
  }
}
