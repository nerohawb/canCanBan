import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  private todos:any = [];
  private doings:any = [];
  private testings:any = [];
  private dones:any = [];

  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  getTodos() {
    return this.todos;
  }

  getDoings() {
    return this.doings;
  }

  getTestings() {
    return this.testings;
  }

  getDones() {
    return this.dones;
  }


  addDones(todoIndex) {
    let todoDoneAdded = this.testings[todoIndex];
    this.testings.splice(todoIndex, 1);
    this.dones.push(todoDoneAdded);
  }

  addTestings(todoIndex) {
    let todoTestAdded = this.doings[todoIndex];
    this.doings.splice(todoIndex, 1);
    this.testings.push(todoTestAdded);
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

  deleteDone(todoIndex) {
    this.dones.splice(todoIndex,1);
  }

  deleteTesting(todoIndex) {
    this.testings.splice(todoIndex, 1);
  }

}
