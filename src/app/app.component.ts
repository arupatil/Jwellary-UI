
import { Component } from '@angular/core';
import 'fa-icons';

myArray : [1,2,3];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-demo';
  values = '';
  route = '';
  isHidden = true;
  
  constructor() { 
  	this.isHidden = true;
  }


}
