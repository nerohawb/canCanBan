import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray, ToastController } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  public doings = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoProvider, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.doings = this.todoService.getDoings();
  }

  callDelete(todoIndex) {
    this.todoService.deleteDoing(todoIndex);
    let DeleteToast = this.toastCtrl.create({
      message: "Shit Happens",
      duration: 2000
    });
      DeleteToast.present();
  }

  addToDone(todoIndex) {
    this.todoService.addDones(todoIndex);
    let toast = this.toastCtrl.create({
      message: 'Good Job! Keep it up',
      duration: 2000,
    });

    toast.present();

  }

  itemReorder($event) {
    reorderArray(this.doings, $event);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

}
