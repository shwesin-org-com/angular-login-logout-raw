import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    {id: 1, description: 'Learn to Dance' },
    {id: 2, description: 'Learn to Angular'},
    {id: 3, description: 'Learn to Spring Boot'},
    {id: 4, description: 'Learn to React'}
  ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
