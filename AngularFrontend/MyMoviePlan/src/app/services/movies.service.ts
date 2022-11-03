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
    this.httpClient.get<Movie[]>('http://localhost:8383/movie/get-all').subscribe({
      next: response => {
        this.movies.next(response);
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });
  }

  update(movie:Movie){
    return this.httpClient.put('http://localhost:8383/movie/update', movie, {responseType: 'text'});
  }
}
