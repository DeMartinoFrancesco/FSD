import { Component, Input } from '@angular/core';

export interface XyzInterface{
  title: string;
  body: string;
  status: number;
}

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.scss']
})
export class XyzComponent {
 @Input() public todo!: XyzInterface;
}
