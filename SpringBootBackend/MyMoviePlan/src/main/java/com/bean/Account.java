package com.bean;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String full_name;
    private String user_name;
    private String password;
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Purchase> purchases;
}
