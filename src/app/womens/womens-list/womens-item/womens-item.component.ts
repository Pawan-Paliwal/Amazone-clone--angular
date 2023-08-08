import { Component, Input } from '@angular/core';
import { womens } from 'src/app/shared/womens.model';

@Component({
  selector: 'app-womens-item',
  templateUrl: './womens-item.component.html',
  styleUrls: ['./womens-item.component.css']
})
export class WomensItemComponent {
  @Input() womens: womens;
  @Input() index:number;
}
