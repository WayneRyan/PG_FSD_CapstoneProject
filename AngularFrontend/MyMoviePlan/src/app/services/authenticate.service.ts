import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Account} from "../beans/Account";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private userInfo = new BehaviorSubject(new Account());
  currentUserInfo = this.userInfo.asObservable();
  private isLoggedIn = new BehaviorSubject(false);
  isCurrentlyLoggedIn = this.isLoggedIn.asObservable();
  private errorMessage = new BehaviorSubject('');
  currentErrorMessage = this.errorMessage.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  logout() {
    this.isLoggedIn.next(false);
    this.errorMessage.next('');
    this.userInfo.next(new Account());
  }

  create(account: Account){
    return this.httpClient.post('http://localhost:8383/account/create', account, {responseType: 'text'});
  }

  authenticate(userName: string, password: string) {
    this.httpClient.post<Account>('http://localhost:8383/account/login', {
      username: userName,
      password: password
    }).subscribe({
      next: response => {
        if (response.id ?? 0 > 0) {
          this.isLoggedIn.next(true);
          this.errorMessage.next('');
        } else {
          this.isLoggedIn.next(false);
          this.errorMessage.next('Incorrect Username or Password');
        }
        this.userInfo.next(response);
      },
      error: (error: Error) => {
        this.isLoggedIn.next(false);
        this.errorMessage.next('Unexpected error');
        this.userInfo.next(new Account());
      }
    });
  }
}
