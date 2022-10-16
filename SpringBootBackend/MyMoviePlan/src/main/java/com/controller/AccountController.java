package com.controller;

import com.bean.Account;
import com.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("account")
@CrossOrigin(origins = "http://localhost:4200")
public class AccountController {
    @Autowired
    AccountService accountService;

    @PostMapping(value = "create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createAccount(@RequestBody Account account) { return accountService.createAccount(account);}

    @GetMapping(value = "get-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Account> getAllAccounts() { return accountService.getAllAccounts();}

    @PostMapping(value = "login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public Account loginToAccount(@RequestBody Account account) {
        if (accountService.checkCredentials(account)){
            return accountService.getByUsername(account.getUsername());
        } else {
            return new Account();
        }
    }

}
