import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartServiceService {
  // private Cart: Cart = this.GETCartFromLocalStorage();
  // private cartsubject: BehaviorSubject<Cart> = new BehaviorSubject(this.Cart);
  public cartItemList: any = [];
  public productlist = new BehaviorSubject<any>([]);
  // total:any

  constructor() {}

  Getmsg() {
    return this.productlist.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productlist.next(product);
    this.getTotalPrice();
  }

  addToCart(item: any) {
    this.cartItemList.push(item);
   
    this.productlist.next(this.cartItemList);
  
  }
  getTotalPrice() {
    let grandtotal = 0;
    this.cartItemList.map((a:any) => {
      grandtotal += a.price;
    });

    return grandtotal;
  }

  removeCArtItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id == a.id) {
        this.cartItemList.splice(index, 1);
        // JSON.parse(localStorage.removeItem('cartItem'));
        localStorage.removeItem('cartItem');
      }
    });
    this.productlist.next(this.cartItemList);
  }


  removeAllcart() {
    this.cartItemList = [];
    this.productlist.next(this.cartItemList);
  }
}
