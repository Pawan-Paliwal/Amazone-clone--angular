import { Component, Input } from '@angular/core';
import { electronics } from 'src/app/shared/electronics.model';

@Component({
  selector: 'app-electronics-item',
  templateUrl: './electronics-item.component.html',
  styleUrls: ['./electronics-item.component.css']
})
export class ElectronicsItemComponent {
  @Input() electronics: electronics;
  @Input() index:number;
}
