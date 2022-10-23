import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {ShowTimeService} from "../services/show-time.service";
import {MovieShowTimes} from "../beans/MovieShowTimes";
import {ShowTime} from "../beans/ShowTime";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  myCart = new Map<string,{movieID:number,showTimeID:number, quantity:number}>();
  myShowTimes = new MovieShowTimes();

  constructor(public cartService:CartService, private showTimeService:ShowTimeService) {}

  ngOnInit(): void {
    this.cartService.currentCart.subscribe(myCart => this.myCart = myCart);
    this.showTimeService.currentMovieShowTimes.subscribe(myShowTimes => this.myShowTimes = myShowTimes);
  }

  private getShowTime(key:string): ShowTime {
    let showTimeId = this.myCart.get(key)?.showTimeID ?? 0;
    let movieId = this.myCart.get(key)?.movieID ?? 0;
    for (let showTime of this.myShowTimes.showTimesByMovieID.get(movieId) ?? []){
      if (showTime.id === showTimeId) return showTime;
    }
    return new ShowTime();
  }

  private getQuantity(key:string): number {
    return this.myCart.get(key)?.quantity ?? 0;
  }

  private getSubTotal(key:string): number {
    return this.getQuantity(key) * this.getShowTime(key).price;
  }

  getTotalPrice(): number {
    let retVal = 0;
    for (let key of this.myCart.keys()){
      retVal += this.getSubTotal(key);
    }
    return retVal;
  }

  makePayment() {
    if(!this.cartService.completePurchase()){
      jQuery.noConflict();
      (<any>$('#paymentFailure')).modal('show');
    }
  }
}
