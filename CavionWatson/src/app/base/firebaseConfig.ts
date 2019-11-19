import * as firebase from 'firebase';

class FirebaseConfig {
    private static firebaseConfig;
    // Initialize Firebase
    config = {
        apiKey: "AIzaSyBxvpVjyDcTMemt6jYIu6y9PO_6rV0qNS4",
        authDomain: "cavionwatson-60541.firebaseapp.com",
        databaseURL: "https://cavionwatson-60541.firebaseio.com",
        projectId: "cavionwatson-60541",
        storageBucket: "cavionwatson-60541.appspot.com",
        messagingSenderId: "288079406103"
      };

    private constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(this.config);
        }        
    }
    static initialize(): FirebaseConfig {
        if (this.firebaseConfig == null) {
            this.firebaseConfig = new FirebaseConfig();
        }
        return this.firebaseConfig;
    }
    getDbReference() {
        return firebase.database().ref('/User');
    }
}

export { FirebaseConfig };