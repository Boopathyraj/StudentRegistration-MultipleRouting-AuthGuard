import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { StudentComponent } from './student.component';
import { StudentService } from './student.service';
import { StudentLoginComponent } from '../student-login/student-login.component';
import { StudentRoutingModule } from './student-routing.module';




@NgModule({
    imports: [
        CommonModule,FormsModule,StudentRoutingModule
    ],
    declarations: [StudentComponent,StudentLoginComponent],
    providers: [StudentService]
})
export class StudentModule { }