import { Injectable } from '@angular/core';
import { Login } from 'src/app/model/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  doAuthenticate(login: Login) {
    const headers = new HttpHeaders(login ? {authorization : 'Basic ' + btoa(login.username + ':' + login.password) } : {});
    this.http.post('http://localhost:5000/login', {headers});
    return true;

  }
}
