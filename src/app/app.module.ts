import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponent/todos/todos.component';
import { TodoItemComponent } from './Mycomponent/todo-item/todo-item.component';
import { AddTodosComponent } from './Mycomponent/add-todos/add-todos.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './Mycomponent/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
