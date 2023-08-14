import { Component, OnInit } from '@angular/core';
import { Beauty } from 'src/app/shared/Beauty.nodel';
import { BeautyService } from '../Beauty-service';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-beauty-list',
  templateUrl: './beauty-list.component.html',
  styleUrls: ['./beauty-list.component.css'],
})
export class BeautyListComponent implements OnInit {
  Beauty: Beauty[];
  constructor(
    private Beautyservice: BeautyService,
    private activatedroute: ActivatedRoute,
    cartservice:CartServiceService
  ) {}

  ngOnInit(): void {
    this.activatedroute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.Beauty = this.Beautyservice.Serchresult(params.searchTerm);
      } else {
        this.Beauty = this.Beautyservice.GetAll();
      }
    });
   
  }
}
