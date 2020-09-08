import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Some welcome message';
  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
