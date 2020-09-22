import { Component, Input } from '@angular/core';
import { expandCollapse } from './zippy.componenet.animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [
    expandCollapse
  ]
})
export class ZippyComponent  {
  // tslint:disable-next-line: no-input-rename
  @Input('title') title: string;
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }
}
