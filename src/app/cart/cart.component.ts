import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  allproduct:any=0;
  gettotal:any=0;
  constructor(private cartService: CartServiceService) {}

  ngOnInit(): void {
    this.cartService.Getmsg().subscribe((cart) => {
      this.cart = cart;
      this.allproduct=this.cartService.getTotalPrice();
    });
    this.cartService.Getmsg().subscribe(res=>{
      this.gettotal=res.length;
    })
  }
   removeItem(item:any){
    this.cartService.removeCArtItem(item);
   }

   removeAll(){
     this.cartService.removeAllcart();
   }
}
