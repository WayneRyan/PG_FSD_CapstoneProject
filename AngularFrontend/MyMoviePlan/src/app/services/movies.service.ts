import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {Movie} from "../beans/Movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies = new BehaviorSubject(new Array<Movie>());
  currentMovies = this.movies.asObservable();

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    let myURL =  window.location.href;
    myURL = myURL.substring(0, myURL.lastIndexOf(':')) + ':8383/movie/get-all';
    this.httpClient.get<Movie[]>(myURL).subscribe({
      next: response => {
        this.movies.next(response);
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });
  }

  update(movie:Movie){
    let myURL =  window.location.href;
    myURL = myURL.substring(0, myURL.lastIndexOf(':')) + ':8383/movie/update';
    return this.httpClient.put(myURL, movie, {responseType: 'text'});
  }
}
