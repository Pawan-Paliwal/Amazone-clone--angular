import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Personal } from 'src/app/shared/personal.model';
import { PersonalService } from '../personal.service';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent {
  Personal: Personal;
  @Input() id:number;

  constructor(private activerouter:ActivatedRoute,private PersonalService:PersonalService,private cartservice:CartServiceService){}

ngOnInit(): void {
  this.activerouter.params
  .subscribe((params:Params)=>{
    this.id=+params['id'];
    this.Personal=this.PersonalService.Getid(this.id);
  })
}
AddToCart(item:any){
  this.cartservice.addToCart(item)
  }
}
