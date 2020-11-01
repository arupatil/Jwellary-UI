import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

	myId = '';
	isHidden = true;
	meClicked(thisVal) {
		console.log(thisVal);
	  	this.isHidden = false;
	}
 	constructor() { 
 		this.myId = "test";
 	}

	ngOnInit(): void {
	
	}
}
