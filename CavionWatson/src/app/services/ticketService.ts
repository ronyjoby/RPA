import {Injectable} from '@angular/core'
import {AppConfig} from '../base/appconfig';
import { HttpClient} from '@angular/common/http';
import { Validator } from '../base/validator';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Injectable()

export class TicketService{
    users:FirebaseListObservable<any[]>;
    constructor(private http:HttpClient ,private appConfig:AppConfig, public af:AngularFireDatabase){
       this.users = this.af.list('/Tickets');
    }
    approveTicket(currentTicket){
        console.log("Current Ticket :" + currentTicket);
        console.log("Staus : " +currentTicket.Status);
        currentTicket.Status = 'Approved';
        this.users.update(currentTicket.$key, currentTicket);
        let request = this.appConfig.getServerUrl();
        console.log('server url is:'+request);      
        return this.http.post("http://localhost:3000/dyncrm/addnewcase" ,{"issue_title":currentTicket.issue_title} );
    }
}