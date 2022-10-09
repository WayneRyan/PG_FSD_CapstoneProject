package com.service;

import com.bean.Movie;
import com.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class MovieService {
    @Autowired
    MovieRepository movieRepository;

    public String createMovie(Movie movie){
        movieRepository.save(movie);
        return "Movie created successfully";
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }
}
