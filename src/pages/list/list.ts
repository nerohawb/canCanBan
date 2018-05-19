import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public doings = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoProvider) {
  }

  ionViewDidLoad() {
    this.doings = this.todoService.getDoings();
  }

  callDelete(todoIndex) {
    this.todoService.deleteDoing(todoIndex);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  addToDone(todoIndex) {
    this.todoService.addDones(todoIndex);
  }

  itemReorder($event) {
    reorderArray(this.doings, $event);
  }


}
