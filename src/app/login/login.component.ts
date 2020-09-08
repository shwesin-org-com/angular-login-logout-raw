import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'shwesin';
  password = '';
  errorMessage = 'Invalid Creditial ! Username & Password Wrong';
  invalidLogin = false;
  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // if (this.username === 'shwesin' && this.password === 'shwesin') {
     if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
    // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
