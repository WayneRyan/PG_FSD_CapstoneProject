package com.controller;

import com.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("show-time")
public class ShowTimeController {
    @Autowired
    ShowTimeService showTimeService;
}
