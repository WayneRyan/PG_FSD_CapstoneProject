import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {Movie} from "../beans/Movie";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.currentMovies.subscribe( movies => {this.movies = movies;})
  }

}
