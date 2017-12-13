import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
  studentUrl = "http://localhost:8080/api/Registration/";
  constructor(private http: Http) { }

  addStudentDeatils(stud){
    alert("service");
    return  this.http.post(this.studentUrl + "post", stud)
    .map(res => res.json());
  }
}
