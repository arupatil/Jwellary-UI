import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ProductComponent } from './product/product.component';
import { Demo2Component } from './demo2/demo2.component';

import { Billing1Component } from './billing1/billing1.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

const routes: Routes = [
	
	{
		path: "employees",
		component:EmployeeComponent
	},
	{
		path: "product",
		component:ProductComponent
	},
	{
		path: "demo-bootstrap",
		component:Demo2Component
	},
	{
		path: "billing1",
		component:Billing1Component
	},
	{
		path: "customer-detail",
		component:CustomerFormComponent
	},
	{
		path: "payment",
		component:PaymentFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents  = [
	EmployeeComponent, ProductComponent, Demo2Component, Billing1Component, CustomerFormComponent, PaymentFormComponent
];