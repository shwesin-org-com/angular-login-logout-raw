import { Component, OnInit } from '@angular/core';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Learn to Angular', false, new Date()),
    new Todo(3, 'Learn to React', false, new Date()),
    new Todo(4, 'Learn to Spring Boot', false, new Date())
    // { id: 1, description: 'Learn to Dance' },
    // { id: 2, description: 'Learn to Angular' },
    // { id: 3, description: 'Learn to Spring Boot' },
    // { id: 4, description: 'Learn to React' }
  ];
  // todo = {
  //   id: 1,
  //   description: 'Learn to Dance'
  // };
  constructor() { }

  ngOnInit(): void {
  }

}
