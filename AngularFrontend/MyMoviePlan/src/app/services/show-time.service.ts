import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {MovieShowTimes} from "../beans/MovieShowTimes";
import {ShowTime} from "../beans/ShowTime";
import {Account} from "../beans/Account";

@Injectable({
  providedIn: 'root'
})
export class ShowTimeService {

  userInfo: Account = new Account();
  private movieShowTimes = new BehaviorSubject<MovieShowTimes>({
    allMovies: [],
    showTimesByMovieID: new Map<number, ShowTime[]>()
  });
  currentMovieShowTimes = this.movieShowTimes.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    let myURL =  window.location.href;
    myURL = myURL.substring(0, myURL.lastIndexOf(':')) + ':8383/show-time/get-all';
    this.httpClient.get<MovieShowTimes>(myURL).subscribe({
      next: response => {
        let retval: MovieShowTimes = new MovieShowTimes();
        for (const [key, value] of Object.entries(response.showTimesByMovieID)) {
          retval.showTimesByMovieID.set(Number(key), value);
        }
        retval.allMovies = response.allMovies;
        this.movieShowTimes.next(retval);
      },
      error: (error: Error) => console.log(error.message)
    });
  }

  update(showTime: ShowTime) {
    let myURL =  window.location.href;
    myURL = myURL.substring(0, myURL.lastIndexOf(':')) + ':8383/show-time/update';
    return this.httpClient.put(myURL, showTime, {responseType: 'text'});
  }

  create(showTime: ShowTime) {
    let myURL =  window.location.href;
    myURL = myURL.substring(0, myURL.lastIndexOf(':')) + ':8383/show-time/create';
    return this.httpClient.post(myURL, showTime, {responseType: 'text'});
  }


}
