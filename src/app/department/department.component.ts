import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department',
  template: `
    <div class="f1logoBar row">
      <img src="../assets/f1logo.svg" height="50" width="80" />
      <p class="text-right close-icon-blue"> 
        <img src="../assets/close-icon-blue.svg" height="10" width="20">
      </p>
    </div>
    <div class="row menu-bar" style="margin-left: 0px;">
    
          <a class="col" routerLink="/departments" routerLinkActive="active">
            Departments
          </a>
       
          <a class="col" routerLink="/employees">
            Employees
          </a>
       
          <a class="col" routerLink="/demo-bootstrap">
            Bootstrap
          </a>
    </div>
    <div class="row" style="padding-left: 5%;">
       
        <p>
          department works!
        </p>
      </div>
    
  `,
  styles: [
  ]
})
export class DepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
