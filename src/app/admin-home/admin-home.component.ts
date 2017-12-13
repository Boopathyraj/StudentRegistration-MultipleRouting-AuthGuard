import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { Details } from '../student/details';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  list : Details[];
  constructor(private adminService:AdminService ) { }

  ngOnInit() {
this.getAll();
    
  }
  getAll(){
    this.adminService.getAllRegisterStdents()
    .subscribe(
      data => this.list = data,
     // errorCode => this.statusCode = errorCode
     );
  
  }

}
