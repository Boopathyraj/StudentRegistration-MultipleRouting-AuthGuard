import { Component } from '@angular/core';
import { AdminService } from './admin.service';
import { Admin } from './admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
//   login: boolean;
  bean = new Admin();
   constructor() { }


//   Login(){
//  this.login =this.adminService.LoginValidation(this.bean);
//  if(this.login==true)
//  {
//   alert("Login successfull");
//  }
//  else{
//   alert("Enter the valid Username and Password");
//  }
//   }

}
