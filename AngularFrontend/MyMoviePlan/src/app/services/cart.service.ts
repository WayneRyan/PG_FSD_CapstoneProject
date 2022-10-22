import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myCart = new BehaviorSubject<Map<string, { movieID: number, showTimeID: number, quantity: number }>>(new Map());
  currentCart = this.myCart.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  add(movieID: number, showtimeID: number) {
    let key = this.makeKey(movieID, showtimeID);
    let ticket = this.myCart.value.get(key) ?? {movieID: movieID, showTimeID: showtimeID, quantity: 0};
    ticket.quantity++;
    this.myCart.value.set(key, ticket);
    console.log(this.myCart.value);
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

  }
}
