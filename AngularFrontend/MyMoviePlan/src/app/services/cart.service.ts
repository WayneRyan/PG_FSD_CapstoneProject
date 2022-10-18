import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myMovies = new BehaviorSubject([]);
  currentMovies = this.myMovies.asObservable();

  constructor(private httpClient: HttpClient) { }

  addMovie(showtimeID:number){

  }
}
