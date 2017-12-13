import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';


import { StudentService } from './student.service';
import { Details } from './details';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  statusCode: number;

  stud: Details = new Details();



  constructor(private studService: StudentService) { }

  submit() {
    alert("component");
    this.studService.addStudentDeatils(this.stud).subscribe(
      successCode => {
        this.statusCode = successCode;
        // alert(this.statusCode);
        // this.getall();
      },
      errorCode => this.statusCode = errorCode
    );

  }



}
