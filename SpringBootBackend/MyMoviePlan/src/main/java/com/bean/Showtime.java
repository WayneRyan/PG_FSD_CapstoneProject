package com.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Showtime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private Movie movie;
    private Date starttime;
    private double price;
    private int theatre;
    private int available;
    private boolean enabled;
    @OneToMany(mappedBy = "showtime", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Purchase> purchases;

    public static Showtime safeCopy(Showtime original){
        Showtime retVal = new Showtime();
        retVal.id = original.id;;
        retVal.movie = null;
        retVal.starttime = original.starttime;
        retVal.price = original.price;
        retVal.theatre = original.theatre;
        retVal.available = original.available;
        retVal.enabled = original.enabled;
        retVal.purchases = null;
        return retVal;
    }
}
