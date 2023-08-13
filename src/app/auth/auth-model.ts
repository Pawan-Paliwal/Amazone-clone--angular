export class User {
  constructor(
    public email: string,
    public password: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
         return null;
    }
    return this._token;
  }

  
}

// class AuthGuard {
//   constructor(private authservice:Authservice){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | Promise<boolean> | Observable<boolean>{
//    return this.authservice.user.pipe(map(user=>{
//     return !!user
//    }))
//   }
// }

// export const IsAuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean| Promise<boolean> | Observable<boolean> => {
//   return inject(AuthGuard).canActivate(route,state);
// };