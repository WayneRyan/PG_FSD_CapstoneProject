import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Ticket} from "../beans/Ticket";

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  myTickets: Ticket[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getSummary().subscribe({
      next: response => {
        this.myTickets = response;
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    })
  }

}
