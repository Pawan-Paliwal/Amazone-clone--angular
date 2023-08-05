import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/shared/phones.model';
import { phonesService } from '../phones-service';

@Component({
  selector: 'app-phones-list',
  templateUrl: './phones-list.component.html',
  styleUrls: ['./phones-list.component.css']
})
export class PhonesListComponent  implements OnInit{
  Phone: Phone[];
  constructor(private PhoneService:phonesService){}

  ngOnInit(): void {
    this.Phone= this.PhoneService.GetAll();
  }
}
