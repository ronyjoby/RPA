import {Injectable} from '@angular/core'
//import { HttpClient} from '@angular/common/http';
import { Validator } from '../base/validator';

@Injectable()

export class LoginService extends Validator{
    constructor(){
        super();
    }
    login(username:String,password:String){
        console.log('login service called');
        //return this.http.post('http://localhost:3000/login/validate',{"username":username,"password":password});
        return new Promise((resolve,reject)=>{            
            this.ValidateBnkUser(username,password).then(
                (response)=>resolve(true),
                (error)=>reject(false),
            );
        });        
    }
}