import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Beauty } from 'src/app/shared/Beauty.nodel';
import { BeautyService } from '../Beauty-service';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-beauty-detail',
  templateUrl: './beauty-detail.component.html',
  styleUrls: ['./beauty-detail.component.css'],
})
export class BeautyDetailComponent {
  @Input() Beauty: Beauty;
  @Input() id: number;

  constructor(
    private activerouter: ActivatedRoute,
    private BeautyService: BeautyService,
    private cartservice: CartServiceService
  ) {}

  ngOnInit(): void {
    this.activerouter.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.Beauty = this.BeautyService.Getid(this.id);
    });

    // this.Beauty.forEach((a:any) => {
    //   Object.assign(a,{quantity:1,total:a.price})
    // });
    // this.product.array.forEach((a:any) => {
    //     Object.assign(a,{quantity:1,total:a.price})
    //   });
  }

  // AddToCart(){
  //   this.cartservice.AddToCart(this.Beauty);
  //   this.router.navigateByUrl('/cart-page');
  // }
//  productInfoCart = [];
//   AddToCart() {
//     this.cartservice.Getmsg().subscribe((data) => {
//       this.productInfoCart=data
//       localStorage.setItem(
//         'cartProducts',
//         JSON.stringify(this.productInfoCart)
//       );
//       console.log('Session data: ', localStorage.getItem('cartProducts'));
//     });
//   }
AddToCart(item:any){
this.cartservice.addToCart(item)
}
}
