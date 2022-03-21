/**
 * Summary
 *
 * Description
 *
 * @author  Emine Yasenova
 * @version 1.0
 * @since   20/3/2022
 */

 import { Injectable } from '@angular/core';
 import {
     HttpEvent,
     HttpInterceptor,
     HttpHandler,
     HttpRequest
 } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { environment } from 'src/environments/environment';
 
 @Injectable()
 export class InterceptService implements HttpInterceptor {
     // intercept request and add token
     intercept(
         request: HttpRequest<any>,
         next: HttpHandler
     ): Observable<HttpEvent<any>> {
         // modify request
         request = request.clone({
             setHeaders: {
                'fr-access-token': `${environment.APIKey}`
             }
         });
         return next.handle(request);
     }
 }
 