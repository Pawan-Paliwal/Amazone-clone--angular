import { Component, OnInit } from '@angular/core';
import { Authservice } from './auth/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private authservice:Authservice){}

ngOnInit(): void {
  console.log('hey')
    this.authservice.Autologin();
    console.log('hey')
}
}
 