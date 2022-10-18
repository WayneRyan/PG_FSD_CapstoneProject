package com.service;

import com.bean.Showtime;
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

    public HashMap<Integer, List<Showtime>> getAllShowTimes() {
        HashMap<Integer, List<Showtime>> retVal = new HashMap<>();
        for (Showtime showtime : showTimeRepository.findAll()) {
            Integer movie_id = showtime.getMovie().getId();
            if (! retVal.containsKey(movie_id)){
                retVal.put(movie_id,new ArrayList<Showtime>());
            }
            retVal.get(movie_id).add(showtime);
        }
        return retVal;
    }
}
