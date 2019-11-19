import {Injectable} from '@angular/core'
import { HttpClient} from '@angular/common/http';
import {AppConfig} from '../base/appconfig';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
@Injectable()

export class ChatbotService{
    
    tickets: FirebaseListObservable<any[]>;
    properties = null;
    constructor(private http:HttpClient ,private appConfig:AppConfig,public af: AngularFireDatabase,){
        this.tickets = this.af.list('/Tickets');
    }
    getData(userInput:string){
        let request = this.appConfig.getServerUrl();
        console.log('server url is:'+request);      
        return this.http.post("http://localhost:3000/watson" ,{"userInput":userInput} );
    }

    processWatsonAction(action:string,data){
        if(action === "do_create_ticket"){            
            let date = new Date();
            let dateString = date.getDate() + "/" + date.getMonth()+"/"+date.getFullYear();
            const ticket = {Ticket_id:'105',Issue_description:data.issue_title,Member:'John sam',Product:'cavion',Status:'Pending',Date:dateString};
            this.tickets.push(ticket); 
            return this.http.post("http://localhost:3000/watson" ,{"userInput":"ticket  created"} );                          
        }else{
            return this.http.post("http://localhost:3000/cavion" ,{"action":action,"data":data} );
        }
        
    }
}