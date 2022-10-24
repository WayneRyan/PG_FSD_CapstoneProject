import {Component, OnInit} from '@angular/core';
import {ShowTimeService} from "../services/show-time.service";
import {MovieShowTimes} from "../beans/MovieShowTimes";
import {ShowTime} from "../beans/ShowTime";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movieShowTimes: MovieShowTimes = {allMovies: [], showTimesByMovieID: new Map<number, ShowTime[]>()};
  successfullyAdded = false;

  constructor(private showTimeService: ShowTimeService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.showTimeService.currentMovieShowTimes.subscribe((movieShowTimes: MovieShowTimes) => {
      this.movieShowTimes = movieShowTimes;
    });
    this.showTimeService.getAll();
  }

  addToCart(movieID: number, showTime: string) {
    if (Number(showTime) !== 0) {
      this.successfullyAdded = true;
      this.cartService.add(movieID, Number(showTime));
    }else {
      this.successfullyAdded = false;
    }
  }

  clearSearch() {
    this.showTimeService.getAll();
  }

  filterMovies(searchTerm: string) {
    console.log(searchTerm);
    if (searchTerm.length > 0) {
      let regex = new RegExp(searchTerm, 'i');
      this.movieShowTimes.allMovies = this.movieShowTimes.allMovies.filter((movie) => {
        let retVal: boolean = movie.name.search(regex) !== -1 ||
          movie.genre.search(regex) !== -1 ||
          movie.description.search(regex) !== -1 ||
          movie.language.search(regex) !== -1 ||
          movie.rating.search(regex) !== -1;
        return retVal;
      });
    } else {
      this.showTimeService.getAll();
    }
  }
}
