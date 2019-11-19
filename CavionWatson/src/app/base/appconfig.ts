import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig{
    private config: Object = null;

    constructor(private http:HttpClient){

    }

    getObject(key:any){
        return this.config[key];
    }

    getServerUrl(){
        let url = this.config["server.url"];
        let port = this.config["server.port"];
        return "http://"+url+"/"+port+"/";
    }

    public load() {
        return new Promise((resolve, reject) => {
            this.http.get('http://localhost:8100/assets/config.json')
            .subscribe( (response:any) => {
               this.config = response;
               console.log('config file loaded :'+this.getObject("server.url"));
               resolve(true);
            });
        });
    }

}