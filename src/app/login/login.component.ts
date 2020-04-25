import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login.model';
import { FormsModule } from '@angular/forms';
import { HardCodedServiceService } from '../service/hard-coded-service.service';
import { Router } from '@angular/router';
import { LoginService } from '../service/data/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login('', '');
  errorMessage: string;
  constructor(private hardCodedService: LoginService, private route: Router) {

   }

  ngOnInit() {
  }

  doLogin() {
    if (this.hardCodedService.doAuthenticate(this.login)) {
        this.route.navigate(['tables']);
    } else {
        this.errorMessage = 'Invalid Credentials';
    }

  }

}
