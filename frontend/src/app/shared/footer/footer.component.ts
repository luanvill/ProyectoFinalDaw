import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faFacebookF = faFacebookF;
  faInstagram=faInstagram;
  latitude: number = -2.1447501;
  longitude: number =  -79.967877;
  constructor() { }

  ngOnInit() {
  }

}