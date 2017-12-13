import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { StudentLoginComponent } from '../student-login/student-login.component';


const routes: Routes = [
  
  {
    path: '',
    component:StudentComponent,
   
    children: [
      {
        path: 'studlogin',
        component: StudentLoginComponent
      }
    ]
  
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }