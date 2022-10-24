import {Component, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {NgForm} from "@angular/forms";
import {ShowTimeService} from "../services/show-time.service";
import {MovieShowTimes} from "../beans/MovieShowTimes";
import {ShowTime} from "../beans/ShowTime";
import {Movie} from "../beans/Movie";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movieShowTimes = new MovieShowTimes();
  showTimeToEdit = new ShowTime();
  modalPurpose = '';
  modalMessage = '';

  constructor(private movieService: MoviesService, private showTimeService: ShowTimeService) {
  }

  ngOnInit(): void {
    this.showTimeService.currentMovieShowTimes.subscribe(movieShowTimes => this.movieShowTimes = movieShowTimes);
    this.showTimeService.getAll();
  }

  updateMovie(f: NgForm) {
    this.movieService.update(f.value).subscribe({
      next: response => {
        if (response == 'Movie updated successfully') {
          console.log("successfully updated");
          this.movieService.getAll();
        }
      },
      error: (error: Error) => {
        console.log(error.message);
      }
    });
    console.log(f.value);
  }

  updateShowtime(f: NgForm) {
    for (let showtime of this.movieShowTimes.showTimesByMovieID.get(f.value.movieID) ?? []) {
      if (showtime.id == f.value.showTimeID) {
        showtime.movie = {id: f.value.movieID};
        this.showTimeToEdit = showtime;
        break;
      }
    }
    if (this.showTimeToEdit?.id ?? 0 > 0) {
      this.modalPurpose = 'Update';
      this.modalMessage = '';
      jQuery.noConflict();
      (<any>$('#showtimeEdit')).modal('show');
    }
  }

  createNewShowtime(movie: Movie) {
    this.showTimeToEdit = new ShowTime();
    this.showTimeToEdit.movie = {id: movie.id};
    this.showTimeToEdit.starttime = new Date();
    delete this.showTimeToEdit.id;
    this.modalPurpose = 'Add';
    this.modalMessage = '';
    jQuery.noConflict();
    (<any>$('#showtimeEdit')).modal('show');
  }

  completeUpdate(f: NgForm) {
    if (this.modalPurpose === 'Add') {
      this.showTimeService.create(this.showTimeToEdit).subscribe({
        next: response => {
          this.modalMessage = response;
          this.showTimeService.getAll();
        },
        error: (error: Error) => console.log(error.message)
      })
    } else {
      this.showTimeService.update(this.showTimeToEdit).subscribe({
        next: response => {
          this.modalMessage = response;
          this.showTimeService.getAll();
        },
        error: (error: Error) => console.log(error.message)
      })
    }
  }

  deleteShowTime() {

  }
}
