import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray, ToastController } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";

/**
 * Generated class for the DonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-done',
  templateUrl: 'done.html',
})
export class DonePage {

  public dones = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoProvider, private toastCtrl:ToastController) {

  }

  ionViewDidLoad() {
        this.dones = this.todoService.getDones();
  }

  itemReorder($event) {
    reorderArray(this.doings, $event);
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }


    callDelete(todoIndex) {
      this.todoService.deleteDone(todoIndex);
      let toast = this.toastCtrl.create({
        message: 'Done and Done',
        duration: 2000,
      });

      toast.present();
    }

}
