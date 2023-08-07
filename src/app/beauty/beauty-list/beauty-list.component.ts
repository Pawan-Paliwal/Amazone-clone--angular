import { Component, OnInit } from '@angular/core';
import { Beauty } from 'src/app/shared/Beauty.nodel';
import { BeautyService } from '../Beauty-service';

@Component({
  selector: 'app-beauty-list',
  templateUrl: './beauty-list.component.html',
  styleUrls: ['./beauty-list.component.css']
})
export class BeautyListComponent  implements  OnInit{
  Beauty: Beauty[];
  constructor(private Beautyservice:BeautyService){}

  ngOnInit(): void {
    this.Beauty= this.Beautyservice.GetAll();
  }
}
