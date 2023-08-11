import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../Services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
gettotal:number=0;

  constructor( private cartService:CartServiceService){}
ngOnInit(): void {
    this.cartService.Getmsg().subscribe(res=>{
      this.gettotal=res.length;
    })
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
