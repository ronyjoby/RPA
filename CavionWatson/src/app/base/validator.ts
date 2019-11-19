import { FirebaseConfig } from "./firebaseConfig";

export class Validator{
    firebase = FirebaseConfig.initialize();
    constructor(){
        
    }
    ValidateBnkUser(username:String,password:String){
        return new Promise((resolve,reject)=>{
                this.firebase.getDbReference().on("value", function(snapshot) { 
                    if(snapshotToArray(snapshot, username,password)){                                 
                        resolve(true);
                    }
                    else{
                        console.log("User is not a valid member.");
                        reject(false);
                    }
                }, function (errorObject) {
                console.log("Read failed from DB : " + errorObject.code);
                reject(false);
              });
        })

        
    }
}
function snapshotToArray(snapshot,username,password) {
    var isValidUser = false;
    if(snapshot != null && snapshot != undefined){
        snapshot.forEach(function(childSnapshot){
            var item = childSnapshot.val();
            if(item.username === username && item.password === password){
                isValidUser = true;
            }
        });
    }        
    return isValidUser;
}