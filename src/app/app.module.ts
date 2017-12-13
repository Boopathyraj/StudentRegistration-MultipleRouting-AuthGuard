import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import {DropdownModule} from "ng2-dropdown";
import { Routes, RouterModule } from '@angular/router';




import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentService } from './student/student.service';
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './auth/admin.guard';
import { AdminService } from './admin/admin.service';
import { AuthService } from './auth/auth.service';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    ReactiveFormsModule,
    HttpModule,AppRoutingModule,DropdownModule,RouterModule
  ],
  providers: [StudentService,AdminService,AuthService,AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }












// @NgModule({
//   declarations: [
//     AppComponent,
//     StudentComponent,
//     AdminComponent,
//     HomeComponent
//   ],
//   imports: [
//     BrowserModule, FormsModule,
//     ReactiveFormsModule,
//     HttpModule,AppRoutingModule,DropdownModule
//   ],
//   providers: [StudentService,AdminService,AuthService,AdminGuard],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
