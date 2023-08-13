import { Injectable, inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { Authservice } from './auth-service';
 @Injectable({providedIn:'root'})


class AuthGuard {
  constructor(private authservice:Authservice){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Promise<boolean> | Observable<boolean>{
   return this.authservice.user.pipe(map(user=>{
    return !!user;
   }))
  }
}

export const IsAuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean| Promise<boolean> | Observable<boolean> => {
  return inject(AuthGuard).canActivate(route,state);
};
