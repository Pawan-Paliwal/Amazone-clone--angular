import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Mens } from 'src/app/shared/mens.model';
import { MensService } from '../mens-service';

@Component({
  selector: 'app-mens-detail',
  templateUrl: './mens-detail.component.html',
  styleUrls: ['./mens-detail.component.css']
})
export class MensDetailComponent {
  Mens: Mens;
  @Input() id:number;

  constructor(private activerouter:ActivatedRoute,private MensService:MensService){}

ngOnInit(): void {
  this.activerouter.params
  .subscribe((params:Params)=>{
    this.id=+params['id'];
    this.Mens=this.MensService.Getid(this.id);
  })
}
}
