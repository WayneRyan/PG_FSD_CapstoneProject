package com.controller;

import com.bean.ShowTime;
import com.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("show-time")
public class ShowTimeController {
    @Autowired
    ShowTimeService showTimeService;

    @PostMapping(value = "create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createShowTime(@RequestBody ShowTime showTime) {return showTimeService.createShowTime(showTime);}

    @GetMapping(value = "get-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ShowTime> getAllShowTimes() {return showTimeService.getAllShowTimes();}
}
