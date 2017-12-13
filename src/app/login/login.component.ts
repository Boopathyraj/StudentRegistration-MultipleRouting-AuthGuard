import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Admin } from '../admin/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  bean = new Admin();
  
  constructor(private auth: AuthService,private router:Router) { this.setMessage(); }

  setMessage() {
    this.message = 'Logged ' + (this.auth.isLoggedIn ? 'in' : 'out');
  }
  login(){

    console.log(JSON.stringify(this.bean));
      alert("login ");
          this.message = 'Trying to log in ...';
            this.auth.login(this.bean).subscribe(() => {
          this.setMessage();
          if (this.auth.isLoggedIn) {
            // Todo: capture where the user was going and nav there.
            // Meanwhile redirect the user to the crisis admin
            alert("Loggin sucessfull")
            this.router.navigate(['/admin/portal']);
          }
        //   if(!this.auth.isLoggedIn)
        //   {
        //   alert("You are not the authorized user ");
        // }
        });
    
    }

    logout(){
      alert("logout");
      this.auth.logout();
    this.setMessage();
    }

}
