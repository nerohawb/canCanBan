import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, reorderArray } from 'ionic-angular';

import { TodoProvider } from "../../providers/todo/todo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];
  public reorderIsEnabled = false;

  constructor(
    public navCtrl: NavController,
    private todoService: TodoProvider,
    private alertController: AlertController,
    private toastController: ToastController) {
      this.todos = this.todoService.getTodos();

  }

  addToDoing(todoIndex) {
    this.todoService.addDoing(todoIndex);
    let addGoToast = this.toastController.create({
      message: "Let's Go!",
      duration: 2000
    });
      addGoToast.present();
  }

  callDelete(todoIndex) {
    this.todoService.deleteTodo(todoIndex);
    let DeleteToast = this.toastController.create({
      message: "Shit Happens",
      duration: 2000
    });
      DeleteToast.present();
  }

  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  itemReorder($event) {
    reorderArray(this.todos, $event);
  }

  openTodoWin() {
    let addTodoWin = this.alertController.create({
      title: "Add a Task",
      message: "Enter Your Task",
      inputs: [
        {
          type: "text",
          name: "addTodoInput"
        }
      ],
      buttons: [
        {
          text: "Cancel"
      },
      {
        text: "Add",
        handler: (inputData)=> {
          let todoText = inputData.addTodoInput;
          this.todoService.addTodo(todoText);

          addTodoWin.onDidDismiss(()=> {
            let addTodoToast = this.toastController.create({
              message: "Plan Carefully",
              duration: 2000
            });
              addTodoToast.present();
          });

        }
      }
    ]
    });
    addTodoWin.present();
  }

 //  editTodo(todoIndex) {
 //  let editTodoAlert = this.alertController.create({
 //    title: "Edit A Todo",
 //    message: "Enter Your Todo",
 //    inputs: [
 //      {
 //        type: "text",
 //        name: "editTodoInput",
 //        value: this.todos[todoIndex]
 //      }
 //    ],
 //    buttons: [
 //      {
 //        text: "Cancel"
 //      },
 //      {
 //        text: "Edit Todo",
 //        handler: (inputData)=> {
 //          let todoText;
 //          todoText = inputData.editTodoInput;
 //          this.todoService.editTodo(todoText, todoIndex);
 //
 //          // Toast Alert Display
 //          editTodoAlert.onDidDismiss(()=> {
 //            let editTodoToast = this.toastController.create({
 //              message: "Greate Job on Orginizing",
 //              duration: 2000
 //            });
 //              editTodoToast.present();
 //          });
 //
 //        }
 //      }
 //    ]
 //  });
 //   editTodoAlert.present();
 // }

}
