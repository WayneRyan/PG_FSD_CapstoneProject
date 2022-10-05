package com.bean;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Purchases {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @ManyToOne
    private Show_times show_time;

    private double price;
    private Date finalized;

    @ManyToOne
    private Accounts account;
}
