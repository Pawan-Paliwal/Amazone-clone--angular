import { Component, Input } from '@angular/core';
import { Mens } from 'src/app/shared/mens.model';

@Component({
  selector: 'app-mens-item',
  templateUrl: './mens-item.component.html',
  styleUrls: ['./mens-item.component.css']
})
export class MensItemComponent {
  @Input() Mens: Mens;
  @Input() index:number;
}
