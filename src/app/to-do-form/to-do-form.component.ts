import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from '../../shared/todos.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {

  title: string = ''

  constructor(private todosService: TodosService) { }

  ngOnInit() {
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
      date: new Date()
    }

    this.todosService.addTodo(todo)
    this.title = ''
  }

}
