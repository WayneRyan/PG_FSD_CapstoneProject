import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private userName = new BehaviorSubject('');
  private isLoggedIn = new BehaviorSubject(false);
  private isAdmin = new BehaviorSubject(false);
  myUserName = this.userName.asObservable();
  isCurrentlyLoggedIn = this.isLoggedIn.asObservable();
  isCurrentlyAdmin = this.isAdmin.asObservable();

  constructor() { }

  authenticate(userName:string, password:string):boolean{
    // Need to authenticate with server.

    this.isLoggedIn.next(true);
    this.isAdmin.next(false);
    this.userName.next(userName);
    return true;
  }
}
