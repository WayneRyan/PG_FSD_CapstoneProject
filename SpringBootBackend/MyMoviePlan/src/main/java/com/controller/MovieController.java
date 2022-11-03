package com.controller;

import com.bean.Movie;
import com.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("movie")
@CrossOrigin()
public class MovieController {
    @Autowired
    MovieService movieService;

    @PostMapping(value = "create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createMovie(@RequestBody Movie movie) {
        return movieService.createMovie(movie);
    }

    @GetMapping(value = "get-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @PutMapping(value = "update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String updateMovie(@RequestBody Movie movie) {
        return movieService.updateMovie(movie);
    }
}
