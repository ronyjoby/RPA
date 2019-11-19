import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatBotComponent} from  '../../app/chatbot.component'
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doChat(){
    this.navCtrl.push(ChatBotComponent);
  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }
   
}
