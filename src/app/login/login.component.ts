import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'shwesin';
  password = '';
  errorMessage = 'Invalid Creditial';
  invalidLogin = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin() {
    // console.log(this.username);
    if (this.username === 'shwesin' && this.password === 'shwesin') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
