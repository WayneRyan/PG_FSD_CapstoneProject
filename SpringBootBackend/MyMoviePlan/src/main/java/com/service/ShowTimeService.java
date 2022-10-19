package com.service;

import com.bean.Movie;
import com.bean.Showtime;
import com.dto.MovieShowTimes;
import com.repository.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
@Transactional
public class ShowTimeService {
    @Autowired
    ShowTimeRepository showTimeRepository;

    public String createShowTime(Showtime showTime){
        showTimeRepository.save(showTime);
        return "ShowTime created successfully";
    }

    public MovieShowTimes getAllShowTimes() {
        MovieShowTimes retVal = new MovieShowTimes();
        HashMap<Integer, List<Showtime>> showTimesByMovieID = retVal.getShowTimesByMovieID();
        List<Movie> allMovies = retVal.getAllMovies();
        for (Showtime showtime : showTimeRepository.findAll()) {
            Integer movie_id = showtime.getMovie().getId();
            if (! showTimesByMovieID.containsKey(movie_id)){
                showTimesByMovieID.put(movie_id,new ArrayList<Showtime>());
                allMovies.add(showtime.getMovie());
            }
            showTimesByMovieID.get(movie_id).add(showtime);
        }
        return retVal;
    }
}
