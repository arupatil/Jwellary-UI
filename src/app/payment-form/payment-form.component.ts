import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  isStore = true;
  isStoreToggle = false;
  Stores = ['abd','muhalla2','muhalla3','street1','mandai'];
  constructor() { }
  public isMenuCollapsed = true;
  ngOnInit(): void {
  		this.isStore = false;
  		this.isStoreToggle = true;
  }

  notpickStore() {
  		this.isStore = false;
  		this.isStoreToggle = true;
  }
  pickStore() {
  		this.isStore = true;
  		this.isStoreToggle = false;
  }
}
