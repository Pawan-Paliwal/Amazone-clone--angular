import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';
import { Authservice } from '../auth/auth-service';
import { Subscription } from 'rxjs';
import { User } from '../auth/auth-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  gettotal: number = 0;
  IsAunthetication = false;
  private authSob: Subscription;

  // enterasearchvalue: string = '';
  // @Output() searchtextchange = new EventEmitter<string>();

  constructor(
    private cartService: CartServiceService,
    private authservice: Authservice
  ) {}
  ngOnInit(): void {
    this.cartService.Getmsg().subscribe((res) => {
      this.gettotal = res.length;
    });

    this.authSob = this.authservice.user.subscribe((user) => {
      this.IsAunthetication = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }

  ngOnDestroy(): void {
    this.authSob.unsubscribe();
  }
  // OnSeacrhTextchanges() {
  //   this.searchtextchange.emit(this.enterasearchvalue);
  // }

  LogOUT() {
    confirm('Do you Really want to logout! ');
    this.authservice.logOut();
  }
  //   serchItem(query:KeyboardEvent){
  // if(query){
  //   const element=query.target as HTMLInputElement;
  //   console.log(element.value)
  //   this.baeutyService.Serchresult(element.value).subscribe((result)=>{
  //     console.log(result)
  //   })
  // }
  //   }
}
