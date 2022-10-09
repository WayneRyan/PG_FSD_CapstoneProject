package com.service;

import com.bean.ShowTime;
import com.repository.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ShowTimeService {
    @Autowired
    ShowTimeRepository showTimeRepository;

    public String createShowTime(ShowTime showTime){
        showTimeRepository.save(showTime);
        return "ShowTime created successfully";
    }

    public List<ShowTime> getAllShowTimes() {
        return showTimeRepository.findAll();
    }
}
