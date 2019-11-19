import {Component,OnInit, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import {ChatbotService} from './services/chatbot.service';
import {NgForm} from  '@angular/forms'

@Component({
    templateUrl: 'chatbot.html',
    selector: 'chat-bot'
   
  })
export class ChatBotComponent implements OnInit {  

  @ViewChild(Content) content: Content;
  userInput :string="";
  ngInput : string = "";
  watsonResponseArray : string[];
  messages:{question:string,answer:string}[]=[];
  constructor(private chatbotService : ChatbotService, private navCtrl: NavController){
    
  }

 goHome(){
  this.navCtrl.push(HomePage);
}

  ngOnInit(){
    this.chatbotService.getData("conversation_start")
    .subscribe((response:any)=>{
      this.watsonResponseArray = response.output;
      this.userInput = "";
      this.messages.push({"question":"","answer":this.watsonResponseArray[0]});
    })
  }

  send(ngForm :NgForm){
    console.log('user input is:'+this.userInput);
    this.ngInput = this.userInput;
    this.userInput = "";
   this.chatbotService.getData(this.ngInput)
   .subscribe((response:any)=>{     
      this.watsonResponseArray = response.output;
      console.log('watson response action :'+JSON.stringify(response))
      if(response.action != undefined){
          this.chatbotService.processWatsonAction(response.action,response.data)
          .subscribe((cavionresponse:any)=>{
              console.log('node server returned cavion response '+cavionresponse.output);
              this.watsonResponseArray = cavionresponse.output;      
              this.watsonResponseArray.forEach((watsonAnswer)=>{
               this.messages.push({"question":"","answer":watsonAnswer});
              });
              
          })
      }
      this.messages.push({"question":this.ngInput,"answer":""});
      
      this.watsonResponseArray.forEach((watsonAnswer)=>{
        this.messages.push({"question":"","answer":watsonAnswer});
      });

      setTimeout(() => {
            this.content.scrollToBottom();
        });
      
   })
  }   
}