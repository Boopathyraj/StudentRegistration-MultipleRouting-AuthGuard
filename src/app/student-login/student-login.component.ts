import { Component } from '@angular/core';
import { Details } from '../student/details';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent  {

  stud: Details = new Details();
  constructor(private stdService : StudentService) { }

  login(){
     alert(JSON.stringify(this.stud));
  }

}
