import { Component } from '@angular/core';
import { Mens } from 'src/app/shared/mens.model';
import { MensService } from '../mens-service';

@Component({
  selector: 'app-mens-list',
  templateUrl: './mens-list.component.html',
  styleUrls: ['./mens-list.component.css']
})
export class MensListComponent {
  Mens:Mens[];
  constructor(private MensService:MensService){}

  ngOnInit(): void {
    this.Mens= this.MensService.GetAll();
  }
}
