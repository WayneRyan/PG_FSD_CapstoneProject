package com.service;

import com.bean.Movie;
import com.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MovieService {
    @Autowired
    MovieRepository movieRepository;

    public String createMovie(Movie movie){
        movieRepository.save(movie);
        return "Movie created successfully";
    }
}
