import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './auth-model';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

export interface AuthresponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class Authservice {
  user = new BehaviorSubject<User | null>(null);
  tokenExpirationTimer:any;

  constructor(private http: HttpClient, private router: Router) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthresponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyD_AX_dL1EzMpDpmTulCxbwmbMwif-_WdE ',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.Handleauthentication(
            resData.email,
            resData.idToken,
            resData.localId,
            +resData.expiresIn
          );
        })
      );
  }

  loginMethod(email: string, password: string) {
    return this.http
      .post<AuthresponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_AX_dL1EzMpDpmTulCxbwmbMwif-_WdE',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.Handleauthentication(
            resData.email,
            resData.idToken,
            resData.localId,
            +resData.expiresIn
          );
        })
      );
  }
  //  autoLogin method
  Autologin() {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData') || '{}');
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );

    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }


  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
    }, expirationDuration);
  }



  logOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }
  // Handle the Authentication section and the user Model that exist in the form of Token
  private Handleauthentication(
    email: string,
    localId: string,
    idToken: string,
    expiresIn: number
  ) {
    const ExpireIn = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, localId, idToken, ExpireIn);
    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  // ErrorHandling In Multiple sides
  private handleError(errorRes: HttpErrorResponse) {
    let errorMeassge = 'this email is already exists';
    if (!errorRes.error || !errorRes.error.error) {
      const newError = new Error(errorMeassge);
      return throwError(() => newError);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMeassge = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMeassge = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMeassge = 'This password is not correct.';
        break;
    }
    const newError = new Error(errorMeassge);
    return throwError(() => newError);
  }
}
