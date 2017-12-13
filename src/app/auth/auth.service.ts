import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn: boolean = false;

  login(bean) {
    alert(JSON.stringify(bean));
    if(bean.adminname=="admin" && bean.adminpassword){
      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
      //  this.isLoggedIn = true;
      //  return this.isLoggedIn;
    }
    // this.isLoggedIn = false;
    // return this.isLoggedIn;
     return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
  }
   logout() {
    this.isLoggedIn = false;
  }
}
