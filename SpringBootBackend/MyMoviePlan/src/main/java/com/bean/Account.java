package com.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String fullname;
    private String username;
    private String password;
    private boolean isadmin;
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Purchase> purchases;

    public static Account safeCopy(Account original){
        Account retval = new Account();
        retval.id = original.id;
        retval.fullname = new String(original.fullname);
        retval.username = new String(original.username);
        retval.password = "";
        retval.isadmin = original.isadmin;
        return retval;
    }

}
