import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/core/services/account.service';
import { Login } from 'src/app/shared/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login = {
    email: '', password: ''
  }

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {

  }

  loginSubmit () {
    console.log(' form has been submitted');
    console.log(this.userLogin);

    this.accountService.login(this.userLogin).subscribe(
      data => {
        // redirect to the home 
        console.log(' login success');
        this.router.navigateByUrl('/');
      }
    );;

  }

}
