import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { womens } from 'src/app/shared/womens.model';
import { womenService } from '../womens-service';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-womens-detail',
  templateUrl: './womens-detail.component.html',
  styleUrls: ['./womens-detail.component.css']
})
export class WomensDetailComponent {
  womens: womens;
  @Input() id:number;

  constructor(private activerouter:ActivatedRoute,private womenService:womenService,private cartservice:CartServiceService,public router:Router){}

ngOnInit(): void {
  this.activerouter.params
  .subscribe((params:Params)=>{
    this.id=+params['id'];
    this.womens=this.womenService.Getid(this.id);
  })
}
AddToCart(item:any){
  this.cartservice.addToCart(item);
  }
}
