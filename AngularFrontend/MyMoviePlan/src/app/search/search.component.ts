import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../services/movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  movies:any[] = [];

  constructor(private moviesService:MoviesService) {

  }

  ngOnInit(): void {
    this.moviesService.currentMovies.subscribe( movies => {
      this.movies = movies;
    })
    this.moviesService.getAll();
  }

  addToCart(id:number) {

  }
}
