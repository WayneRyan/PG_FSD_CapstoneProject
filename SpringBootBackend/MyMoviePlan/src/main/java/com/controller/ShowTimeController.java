package com.controller;

import com.bean.Showtime;
import com.dto.MovieShowTimes;
import com.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("show-time")
@CrossOrigin(origins = "http://localhost:4200")
public class ShowTimeController {
    @Autowired
    ShowTimeService showTimeService;

    @PostMapping(value = "create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createShowTime(@RequestBody Showtime showTime) {
        return showTimeService.createShowTime(showTime);
    }

    @GetMapping(value = "get-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public MovieShowTimes getAllShowTimes() {
        return showTimeService.getAllShowTimes();
    }

    @PutMapping(value = "update", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String updateShowTime(@RequestBody Showtime showtime) {
        return showTimeService.updateShowTime(showtime);
    }

    @DeleteMapping(value = "delete/{id}")
    public String deleteShowTime(@PathVariable("id") int id) {
        return showTimeService.deleteShowTime(id);
    }
}
