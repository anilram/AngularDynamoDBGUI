import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AboutDataService {
  constructor(
    private http: HttpClient
  ) { }

  getAboutContent(name: string) {
    return this.http.get<any>('http://localhost:5000/about');
  }

}
