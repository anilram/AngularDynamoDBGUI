import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  getItemAttributes(tableName: string) {
    return this.http.get<Map<string, string>>(`http://localhost:5000/v1/tables/${tableName}/attributes`);
  }

  getItemMetaData(tableName: string) {
    return this.http.get<Map<string, string>>(`http://localhost:5000/v1/tables/${tableName}/metadata`);
  }

  constructor(private http: HttpClient) {

  }

  getTables() {
    return this.http.get<string[]>('http://localhost:5000/v1/tables');
  }

  getItems(tableName: string) {
    const login = {username: 'user', password: 'pass'};
    const headers = new HttpHeaders(login ? {authorization : 'Basic ' + btoa(login.username + ':' + login.password) } : {});
    return this.http.get<string[]>(`http://localhost:5000/v1/tables/${tableName}`);
  }

}
