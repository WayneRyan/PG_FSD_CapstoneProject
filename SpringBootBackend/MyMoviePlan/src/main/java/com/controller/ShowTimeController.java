package com.controller;

import com.bean.Movie;
import com.bean.Showtime;
import com.dto.MovieID;
import com.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("show-time")
@CrossOrigin(origins = "http://localhost:4200")
public class ShowTimeController {
    @Autowired
    ShowTimeService showTimeService;

    @PostMapping(value = "create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createShowTime(@RequestBody Showtime showTime) {return showTimeService.createShowTime(showTime);}

    @GetMapping(value = "get-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public HashMap<MovieID,List<Showtime>> getAllShowTimes() {
        return showTimeService.getAllShowTimes();
    }
}
