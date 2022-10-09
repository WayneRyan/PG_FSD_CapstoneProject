package com.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class ShowTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private Movie movie;
    private Date start_time;
    private double price;
    private int theatre;
    private int available;
    private boolean enabled;
    @OneToMany(mappedBy = "show_time", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Purchase> purchases;
}
