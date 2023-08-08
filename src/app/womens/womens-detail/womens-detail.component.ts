import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { womens } from 'src/app/shared/womens.model';
import { womenService } from '../womens-service';

@Component({
  selector: 'app-womens-detail',
  templateUrl: './womens-detail.component.html',
  styleUrls: ['./womens-detail.component.css']
})
export class WomensDetailComponent {
  womens: womens;
  @Input() id:number;

  constructor(private activerouter:ActivatedRoute,private womenService:womenService){}

ngOnInit(): void {
  this.activerouter.params
  .subscribe((params:Params)=>{
    this.id=+params['id'];
    this.womens=this.womenService.Getid(this.id);
  })
}
}
