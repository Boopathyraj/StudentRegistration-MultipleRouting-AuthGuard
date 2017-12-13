import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class AdminService {
  
  studentUrl = "http://localhost:8080/api/Registration/";
  constructor(private http: Http) { }

  getAllRegisterStdents(){
    return this.http.get(this.studentUrl + "get")
    .map(res => res.json());
  }


}