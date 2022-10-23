package com.dto;
import lombok.Data;

import java.util.Date;

@Data
public class Ticket {
    Date starttime = new Date();
    int quantity = 0;
    String movieName = "";
}
