import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../environments/environment";
import { User } from './login-page/auth/user.model';
import { Event } from './main-page/event.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  apiUrl = environment.API_URL + '/api';

  constructor(private http:HttpClient) { }



  getEventById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/proizvodi/${id}`);
  }


  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/proizvodi/${id}`);
  }


  addUser(user: User): Observable<any> {
    return this.http.post(`${environment.API_URL}/authenticate/users`, user);
  }

}
