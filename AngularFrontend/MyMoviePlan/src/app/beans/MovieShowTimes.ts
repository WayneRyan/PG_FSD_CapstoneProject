import {Movie} from "./Movie";
import {ShowTime} from "./ShowTime";

export class MovieShowTimes {
  public allMovies: Movie[] = [];
  public showTimesByMovieID: Map<number,ShowTime[]> = new Map<number, ShowTime[]>();
}
