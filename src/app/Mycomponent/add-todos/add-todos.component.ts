import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {
  title: string = "";
  dec: string = "";

  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() : void {
    const todo = {
     sno : 8,
     title : this.title,
     description : this.dec,
     active : true

    }
    this.todoAdd.emit(todo);
  }
}
