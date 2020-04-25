import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class HardCodedServiceService {

  constructor() { }

  doAuthenticate(login: Login){
    if(login.username === 'test' && login.password === 'pass'){
      return true;
    } else {
      return false;
    }
  }
}
