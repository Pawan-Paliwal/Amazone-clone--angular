import { Component } from '@angular/core';
import { electronicsService } from '../electronics-service';
import { electronics } from 'src/app/shared/electronics.model';

@Component({
  selector: 'app-electronics-list',
  templateUrl: './electronics-list.component.html',
  styleUrls: ['./electronics-list.component.css']
})
export class ElectronicsListComponent {
  electronics: electronics[];
  constructor(private electronicsService:electronicsService){}

  ngOnInit(): void {
    this.electronics= this.electronicsService.GetAll();
  }
}
