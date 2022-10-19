import {Component, OnInit} from '@angular/core';
import {ShowTimeService} from "../services/show-time.service";
import {MovieShowTimes} from "../beans/MovieShowTimes";
import {ShowTime} from "../beans/ShowTime";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieShowTimes: MovieShowTimes = {allMovies: [], showTimesByMovieID: new Map<number, ShowTime[]>()};

  constructor(private showTimeService: ShowTimeService) {

  }

  ngOnInit(): void {
    this.showTimeService.currentMovieShowTimes.subscribe((movieShowTimes: MovieShowTimes) => {
      this.movieShowTimes = movieShowTimes;
    });
    this.showTimeService.getAll();
  }

  addToCart(id: number) {

  }
}
