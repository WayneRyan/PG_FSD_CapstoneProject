import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Account} from "../beans/Account";
import {AuthenticateService} from "./authenticate.service";
import {Ticket} from "../beans/Ticket";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private myCart = new BehaviorSubject<Map<string, { movieID: number, showTimeID: number, quantity: number }>>(new Map());
  currentCart = this.myCart.asObservable();
  userInfo: Account = new Account();

  constructor(private httpClient: HttpClient, public loginService: AuthenticateService) {
    this.loginService.currentUserInfo.subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
      });
  }

  add(movieID: number, showtimeID: number) {
    let key = this.makeKey(movieID, showtimeID);
    let ticket = this.myCart.value.get(key) ?? {movieID: movieID, showTimeID: showtimeID, quantity: 0};
    ticket.quantity++;
    this.myCart.value.set(key, ticket);
  }

  private makeKey(movieID: number, showtimeID: number): string {
    return movieID + ',' + showtimeID;
  }

  delete(key: string) {
    this.myCart.value.delete(key);
  }

  plusOne(key: string) {
    let current = this.myCart.value.get(key);
    if (current === undefined) return;
    current.quantity++;
    this.myCart.value.set(key, current);
  }

  minusOne(key: string) {
    let current = this.myCart.value.get(key);
    if (current === undefined) return;
    current.quantity--;
    if (current.quantity === 0) {
      this.delete(key)
    } else {
      this.myCart.value.set(key, current);
    }
  }

  completePurchase() {
    let myTickets: { showtime: { id: number }, account: { id: number }, quantity: number }[] = [];
    for (let key of this.myCart.value.keys()) {
      let ticket = this.myCart.value.get(key) ?? {movieID: 0, showTimeID: 0, quantity: 0};
      myTickets.push({showtime: {id: ticket.showTimeID}, account: {id: this.userInfo.id ?? 0}, quantity: ticket.quantity})
    }
    let myURL =  window.location.href;
    myURL = myURL.substring(0, myURL.lastIndexOf(':')) + ':8383/purchase/create';
    return this.httpClient.post(myURL, myTickets, {responseType: 'text'});
  }

  getSummary(){
    let myURL =  window.location.href;
    myURL = myURL.substring(0, myURL.lastIndexOf(':')) + ':8383/purchase/get-by-user/';
    return this.httpClient.get<Ticket[]>(myURL + this.userInfo.id);
  }

}
