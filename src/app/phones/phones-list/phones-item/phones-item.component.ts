import { Component, Input } from '@angular/core';
import { Phone } from 'src/app/shared/phones.model';

@Component({
  selector: 'app-phones-item',
  templateUrl: './phones-item.component.html',
  styleUrls: ['./phones-item.component.css']
})
export class PhonesItemComponent {
 @Input() Phone: Phone;
 @Input() index:number;
}
