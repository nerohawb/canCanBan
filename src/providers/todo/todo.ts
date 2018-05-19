import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos = [];
  private doings = [];
  private dones = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos() {
    return this.todos;
  }

  getDoings() {
    return this.doings;
  }

  getDones() {
    return this.dones;
  }


  addDones(todoIndex) {
    let todoDoneAdded = this.doings[todoIndex];
    this.doings.splice(todoIndex, 1);
    this.dones.push(todoDoneAdded);
  }

  addDoing(todoIndex) {
    let todoDoingAdded = this.todos[todoIndex];
    this.todos.splice(todoIndex, 1);
    this.doings.push(todoDoingAdded);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }


  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex,1);
  }

  deleteDoing(todoIndex) {
    this.doings.splice(todoIndex,1);
  }

}
