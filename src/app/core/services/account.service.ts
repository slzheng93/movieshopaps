import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/Login';
import { User } from 'src/app/shared/models/User';
import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  // create couple of properties of type Observables that can be used throughout the application 
  // Subject and BehaviourSubject are part of Rxjs that we can use to publish messages
  // they are two way 
  // Is USerAuthenticated => bool
  // User => gives us user information

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn = this.isLoggedInSubject.asObservable();

  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable();

  private jwtHelper = new JwtHelperService();

  login(userLogin: Login): Observable<boolean> {

    // take email/password from login component and post it to API
    // localhost:78433/api/account/login
    // JWT => if success, store the JWT in local storage

    // map is very similar to LINQ select
    return this.http.post(`${environment.apiBaseUrl}account/login`, userLogin)
      .pipe(
        map((response: any) => {
          //  if the status code is 200, 201
          // save the response to local storage (JWT)
          if (response) {
            localStorage.setItem('token', response.token);
            this.populateUserInfo();
            return true;
          }
          return false;
        }
        ));

  }

  register() {

    // take the object from register component and post it to API


  }


  logout() {

    // remove the JWT token from local storage
  }

   populateUserInfo() {
    // get the token from local storage, if the token is present and is not expired push tru value to the subject

    var token = localStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // decode the token and get the data in to user object
      // there is libbary in angualr that can decode the token

      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log('isnide the decode method');
      console.log(decodedToken);
      // set the authentoication subject to true
      this.isLoggedInSubject.next(true);

      // set the user subject with decoded value
      this.currentUserSubject.next(decodedToken);

    }

  }

}
