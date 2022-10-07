package com.service;

import com.bean.ShowTime;
import com.repository.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ShowTimeService {
    @Autowired
    ShowTimeRepository showTimeRepository;

    public String createShowTime(ShowTime showTime){
        showTimeRepository.save(showTime);
        return "ShowTime created successfully";
    }
}
