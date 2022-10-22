package com.bean;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Purchase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private Showtime showtime;
    @ManyToOne
    private Account account;
    private int quantity;
}
