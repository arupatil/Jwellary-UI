import { Component, OnInit } from '@angular/core';
import { ProductInfo } from './../product-info';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	public count;
  public submitte = false;
  public hasZeroCount = true;
  public cart = [];
  public productModel = new ProductInfo("", '', '', '',0);
  
  constructor() { 
      this.submitte = false;
  		this.count = 0;
      this.cart[this.count] = this.productModel;
      console.log(this.cart);
  }
  ngOnInit(): void {
  		
  }
  addMore() {
      this.hasZeroCount = false;
  		this.count++;
      this.cart[this.count] =  new ProductInfo("", '', '', '', this.count);
  		//console.log(this.cart);
  }
  onSubmit() {
      this.submitte = false;
      console.log(this.cart);
       this.submitte = true;
      return false;
  }
  minus(th) {
      this.submitte = false;
      console.log(th);
      //delete this.cart[this.count];
      this.cart.splice(th, 1);
      this.count--;
      if(this.count == 0)
      {
          this.hasZeroCount = true;
      }
      console.log(this.cart);
      return false;
  }

  submitted() {
      this.submitte = true;
  }
}
