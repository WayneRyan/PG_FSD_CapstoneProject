package com.bean;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private Showtime showtime;
    private double price;
    private Date finalized;
    @ManyToOne
    private Account account;
}
