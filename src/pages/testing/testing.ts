import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, reorderArray } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";
/**
 * Generated class for the TestingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html',
})
export class TestingPage {

  public testings:any = [];
  public reorderIsEnabled = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private todoService: TodoProvider,
    private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
      this.testings = this.todoService.getTestings();
  }

  addToDone(todoIndex) {
    this.todoService.addDones(todoIndex);
    let toast = this.toastCtrl.create({
      message: 'Done Testing',
      duration: 2000,
    });

    toast.present();

  }

  callDelete(todoIndex) {
    this.todoService.deleteTesting(todoIndex);
    let DeleteToast = this.toastCtrl.create({
      message: "Story Deleted",
      duration: 2000
    });
      DeleteToast.present();
  }

  itemReorder($event) {
    reorderArray(this.testings, $event);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

}
