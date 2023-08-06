import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Phone } from 'src/app/shared/phones.model';
import { phonesService } from '../phones-service';

@Component({
  selector: 'app-phones-detail',
  templateUrl: './phones-detail.component.html',
  styleUrls: ['./phones-detail.component.css']
})
export class PhonesDetailComponent implements OnInit{
  Phone: Phone;
  @Input() id:number;

  constructor(private router:Router,private activerouter:ActivatedRoute,private phneservice:phonesService){}

ngOnInit(): void {
  this.activerouter.params
  .subscribe((params:Params)=>{
    this.id=+params['id'];
    this.Phone=this.phneservice.Getid(this.id);
  })
}
}
