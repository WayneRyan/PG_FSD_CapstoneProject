package com.bean;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String language;
    private String genre;
    private int duration;
    private String rating;
    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
    private List<ShowTime> show_times;
}
