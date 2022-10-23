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
    this.httpClient.get<MovieShowTimes>('http://localhost:8181/show-time/get-all').subscribe({
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
}
