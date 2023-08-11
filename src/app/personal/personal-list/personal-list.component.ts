import { Component } from '@angular/core';
import { Personal } from 'src/app/shared/personal.model';
import { PersonalService } from '../personal.service';

@Component({
  selector: 'app-personal-list',
  templateUrl: './personal-list.component.html',
  styleUrls: ['./personal-list.component.css']
})
export class PersonalListComponent {
  Personal: Personal[];
  constructor(private Personalservice:PersonalService){}

  ngOnInit(): void {
    this.Personal= this.Personalservice.GetAll();
  }
}
