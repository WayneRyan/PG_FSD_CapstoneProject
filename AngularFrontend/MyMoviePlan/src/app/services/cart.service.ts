import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ShowTime} from "../beans/ShowTime";
import {Account} from "../beans/Account";
import {MoviesService} from "./movies.service";
import {ShowTimeService} from "./show-time.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myCart = new BehaviorSubject<Map<string, { movieID: number, showTimeID: number, quantity: number }>>(new Map());
  currentCart = this.myCart.asObservable();

  constructor(private httpClient: HttpClient, private showTimeService: ShowTimeService) {
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

  completePurchase(): boolean {
    let myTickets: { showtime: ShowTime, account: Account, quantity: number }[];
    for (let key of this.myCart.value.keys()) {
      let ticket = this.myCart.value.get(key);
      myTickets.push(this.showTimeService.getTicket(ticket.showTimeID))
    }
    this.httpClient.post<string>('http://localhost:8181/purchase/create', myTickets).subscribe({
      next: response => {
        return true;
      },
      error: (error: Error) => console.log(error.message)
    });
    return false;
  }
}
