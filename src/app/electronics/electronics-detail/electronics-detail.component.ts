import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { electronics } from 'src/app/shared/electronics.model';
import { electronicsService } from '../electronics-service';

@Component({
  selector: 'app-electronics-detail',
  templateUrl: './electronics-detail.component.html',
  styleUrls: ['./electronics-detail.component.css']
})
export class ElectronicsDetailComponent {
  electronics: electronics;
  @Input() id:number;

  constructor(private router:Router,private activerouter:ActivatedRoute,private electronicsService:electronicsService){}

ngOnInit(): void {
  this.activerouter.params
  .subscribe((params:Params)=>{
    this.id=+params['id'];
    this.electronics=this.electronicsService.Getid(this.id);
  })
}
}
