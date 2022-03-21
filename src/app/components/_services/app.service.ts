import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppModel } from '../_models/app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }
  
  getHTTPHeaders(): HttpHeaders {
		const result = new HttpHeaders().set('content-type', 'application/json')
		return result;
	}

  getAppList(): Observable<AppModel>{
    const httpHeaders = this.getHTTPHeaders();
		return this.http.get<AppModel>(environment.API_BASE_URL + environment.API_POSTING, { headers: httpHeaders });
	}

  getAppById(Id: string): Observable<AppModel> {
    const httpHeaders = this.getHTTPHeaders();
		return this.http.get<AppModel>(environment.API_BASE_URL + environment.API_POSTING + `/${Id}`, {
      headers: httpHeaders
    });
  }
  
  
}
