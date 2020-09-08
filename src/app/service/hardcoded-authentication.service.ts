import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if (username === 'shwesin' && password === 'shwesin') {
      return true;
    } else {
      return false;
    }
  }
}
