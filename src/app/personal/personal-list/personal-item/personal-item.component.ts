import { Component, Input } from '@angular/core';
import { Personal } from 'src/app/shared/personal.model';

@Component({
  selector: 'app-personal-item',
  templateUrl: './personal-item.component.html',
  styleUrls: ['./personal-item.component.css']
})
export class PersonalItemComponent {
  @Input() Personal: Personal;
  @Input() index:number;
}
