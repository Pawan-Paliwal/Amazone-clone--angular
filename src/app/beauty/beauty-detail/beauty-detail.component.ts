import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Beauty } from 'src/app/shared/Beauty.nodel';
import { BeautyService } from '../Beauty-service';

@Component({
  selector: 'app-beauty-detail',
  templateUrl: './beauty-detail.component.html',
  styleUrls: ['./beauty-detail.component.css']
})
export class BeautyDetailComponent {
  Beauty: Beauty;
  @Input() id:number;

  constructor(private router:Router,private activerouter:ActivatedRoute,private BeautyService:BeautyService){}

ngOnInit(): void {
  this.activerouter.params
  .subscribe((params:Params)=>{
    this.id=+params['id'];
    this.Beauty=this.BeautyService.Getid(this.id);
  })
}
}
