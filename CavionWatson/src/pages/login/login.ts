import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../app/services/login.service';
import {TicketComponent} from  '../../app/dashboard/ticket.component';
import { HomePage } from '../../pages/home/home';
import {NgForm} from  '@angular/forms'
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

isInvalidLogin  :boolean = false;
constructor(public navCtrl: NavController , public toastCtrl: ToastController, public loginService:LoginService) {

}

goHome(){
  this.navCtrl.push(HomePage);
}

login(ngForm : NgForm) {
    var username = ngForm.value.username;
    var password = ngForm.value.password;
    if(username == '' || password == ''){
      this.showMessage('Invalid User  , Please  try again');
      return;
    }
    this.loginService.login(username,password)
    .then(
      (response)=>this.navCtrl.push(TicketComponent),
      (error)=>{
        this.showMessage('Invalid User  , Please  try again');
      }
    );      
  
  }  

  showMessage(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}