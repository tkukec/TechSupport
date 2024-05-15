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


  getProizvodi(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/proizvodi`);
  } 

  getEventById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/proizvodi/${id}`);
  }


  deleteEvent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/proizvodi/${id}`);
  }

  editProizvod(proizvod: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/proizvodi`, proizvod);
  }/*
  addNar(cartmode: Cart): Observable<any> {
    return this.http.post(`${this.apiUrl}/narudzbe`, cartmode);
  }
  */
  addUser(user: User): Observable<any> {
    return this.http.post(`${environment.API_URL}/authenticate/users`, user);
  }/*
  addContact(contact: Contact): Observable<any> {
    return this.http.post(`${environment.API_URL}/contact/contactus`, contact);
  }

  getProizvodiForUser(id: number): Observable<Cart[]> {
    return this.http.get<Cart[]>(`${this.apiUrl}/narudzbe/${id}`);
  }
  getEmailForAdmin(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.API_URL}/contact/contactus`);
  }*/

}
