import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AdminGuard } from '../auth/admin.guard';
import { AdminComponent } from './admin.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { AdminHomeComponent } from '../admin-home/admin-home.component';


const routes: Routes = [
  
  {
    path: '',
    component:AdminComponent ,
   
    children: [
      {
        path: 'portal',
        component: AdminHomeComponent,
         
           canActivate: [AdminGuard]
      },
      {
      path: 'login',
      component: LoginComponent
    }
    ]
  
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }