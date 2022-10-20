import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myCart = new BehaviorSubject<Map<string,{movieID:number,showTimeID:number, quantity:number}>>(new Map());
  currentCart = this.myCart.asObservable();

  constructor(private httpClient: HttpClient) { }

  add(movieID:number, showtimeID:number){
    let key = this.makeKey(movieID,showtimeID);
    let ticket =  this.myCart.value.get(key) ?? {movieID:movieID, showTimeID:showtimeID, quantity:0};
    ticket.quantity++;
    this.myCart.value.set(key, ticket);
    console.log(this.myCart.value);
  }

  private makeKey(movieID:number, showtimeID:number):string {
    return movieID + ',' + showtimeID;
  }

  delete(movieID:number, showtimeID:number){
    this.myCart.value.delete(this.makeKey(movieID,showtimeID));
  }

  set(movieID:number, showtimeID:number, quantity:number){
    this.myCart.value.set(this.makeKey(movieID,showtimeID),{movieID:movieID, showTimeID:showtimeID, quantity:quantity})
  }
}
