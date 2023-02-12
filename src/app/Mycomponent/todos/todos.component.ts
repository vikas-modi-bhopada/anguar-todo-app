import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localItem : string;
  constructor() {
    // this.todos = [
    //   {
    //     sno : 1,
    //     title : 'This is title1',
    //     description : 'This is description',
    //     active : true
    //   },
    //   {
    //     sno : 2,
    //     title : 'This is title2',
    //     description : 'this is description',
    //     active : true
    //   },
    // ]

    this.localItem = localStorage.getItem("todo") as string;
    if(this.localItem == null){
      this.todos = []
    }else{
       this.todos = JSON.parse(this.localItem);
      console.log(JSON.parse(this.localItem));     
    }
  }

  ngOnInit(): void {
  }

  delete(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(this.todos))
  }

  addTodo(todo: Todo) {
    console.log("add todo" + todo.title);
    this.todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  toggleTodo(todo : Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todo",JSON.stringify(this.todos))
    console.log(this.todos);
    
  }

}
