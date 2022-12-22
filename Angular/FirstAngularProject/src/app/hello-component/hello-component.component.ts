import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-component',
  templateUrl: './hello-component.component.html',
  styleUrls: ['./hello-component.component.scss']
})
export class HelloComponentComponent {
@Input() public title: String = "ciao, mondo!";
@Input() public listOfNames: String[] =[];
@Input() public namesClasses: String ="";
@Input() public titleStyle: String ="";
}
