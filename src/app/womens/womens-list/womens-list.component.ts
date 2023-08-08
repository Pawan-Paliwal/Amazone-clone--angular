import { Component } from '@angular/core';
import { womens } from 'src/app/shared/womens.model';
import { womenService } from '../womens-service';

@Component({
  selector: 'app-womens-list',
  templateUrl: './womens-list.component.html',
  styleUrls: ['./womens-list.component.css']
})
export class WomensListComponent {
  womens:womens[];
  constructor(private womensElService:womenService){}

  ngOnInit(): void {
    this.womens= this.womensElService.GetAll();
  }
}
