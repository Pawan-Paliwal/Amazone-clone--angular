import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthresponseData, Authservice } from './auth-service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLogin = false;
  isLoading = false;
error:string;

  constructor(private authservice: Authservice,private router:Router) {}

  Onswitch() {
    this.isLogin = !this.isLogin;
  }

  onsubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading=true;

    let myobs: Observable<AuthresponseData>;

    if (this.isLogin) {
      //login
      myobs=this.authservice.loginMethod(email, password);
    } else {
      // signUp
      myobs=this.authservice.signUp(email, password);
    }

    myobs.subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading=false;
        this.router.navigate(["Home"]); 

      },
      error: (errorMeassge) => {
        console.log(errorMeassge);
        this.error=errorMeassge;
        this.isLoading=false;
      },
    });
    form.reset();
  }
}
