import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private todoService: TodoProvider) {

  }

  ionViewDidLoad() {
        this.dones = this.todoService.getDones();
  }

}
