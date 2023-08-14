import { Component, OnInit } from '@angular/core';
import { Authservice } from './auth/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
constructor(private authservice:Authservice ,private router:Router){}

ngOnInit(): void {
  console.log('hey')
    this.authservice.Autologin();
    console.log('hey')
}


// navigateToLogin(){
//   console.log("i am in navigate");
//   this.router.navigate(['/login']);
// }
// setTimeout(this.navigateToLogin.bind(this),3000);
// private Promise =new Promise((resolve,reject) => {
//   setTimeout(() => {
//     this.navigateToLogin.bind(this);
//   }, 2200);
// })



}
 