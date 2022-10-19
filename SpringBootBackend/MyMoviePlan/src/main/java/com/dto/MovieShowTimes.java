package com.dto;

import com.bean.Movie;
import com.bean.Showtime;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Data
public class MovieShowTimes {
    List<Movie> allMovies = new ArrayList<>();
    HashMap<Integer, List<Showtime>> showTimesByMovieID = new HashMap<>();
}
