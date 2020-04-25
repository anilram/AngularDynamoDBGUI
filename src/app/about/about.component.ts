import { Component, OnInit } from '@angular/core';
import { AboutDataService } from '../service/data/about-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutText = '';
  errorText = '';
  constructor(private aboutService: AboutDataService) { }

  ngOnInit() {
    this.aboutService.getAboutContent('dynamoDB').subscribe(
      response => {this.aboutText = response.content; },
      error => {console.log(error);this.errorText = error.message; }
      );
  }




}
