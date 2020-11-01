import { Component, OnInit } from '@angular/core';
import Stepper from 'bs-stepper';
import { ProductInfo } from './../product-info';

@Component({
  selector: 'app-billing1',
  templateUrl: './billing1.component.html',
  styleUrls: ['./billing1.component.css']
})
export class Billing1Component implements OnInit{

	  public productModel = new ProductInfo("", '', '', '',0);
    public cart = [];
    colors = ["yello", "blue", "red"];

    count = 0;
    constructor() { 
        
	  }

    ngOnInit() {
      this.cart[this.count] = this.productModel;
      console.log(this.cart);
  	}

  	onSubmit() {
      console.log("hjdghjd");
      console.log(this.cart);
    	return false;

  	}
  	next() {
    	
  	}

    add() 
    {
        this.count++;
        this.cart[this.count] =  new ProductInfo("", 'djfgh', '', '', this.count);
        console.log(this.cart);
    }

}
