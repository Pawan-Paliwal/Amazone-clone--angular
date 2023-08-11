import { Component, Input } from '@angular/core';
import { Beauty } from 'src/app/shared/Beauty.nodel';

@Component({
  selector: 'app-beauty-item',
  templateUrl: './beauty-item.component.html',
  styleUrls: ['./beauty-item.component.css']
})
export class BeautyItemComponent {
  @Input() Beauty: Beauty;
  @Input() index:number;
  
}
