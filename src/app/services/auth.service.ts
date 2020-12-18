import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly userUrl = `${environment.apiUrl}/users`;

  constructor(
    private _fireAuth: AngularFireAuth,
    private http: HttpClient
  ) { }

  signInWithGoogle() {
    this._fireAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider()).then(
      (result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      return user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  addNewUser(user: any): Observable<any> {
    return this.http.post(this.userUrl, user);
  }
}
