import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from '../login/login.component';
import { AdminService } from './admin.service';
import { AppComponent } from '../app.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';


@NgModule({


  declarations: [AdminComponent,LoginComponent,AdminHomeComponent],
  imports: [
    CommonModule,AdminRoutingModule,FormsModule
  ],
  
  providers: [AdminService],
  bootstrap: [AdminComponent]
  
  
})
export class AdminModule { }
