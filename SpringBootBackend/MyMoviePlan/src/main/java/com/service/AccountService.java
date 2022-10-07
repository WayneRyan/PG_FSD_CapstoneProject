package com.service;

import com.bean.Account;
import com.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {

    @Autowired
    AccountRepository accountRepository;

    public String createAccount(Account account) {
        // Need to test issues with account already exists.
        accountRepository.save(account);
        return "Account created successfully";
    }

    public List<Account> getAllAccounts() {
        List<Account> junk = accountRepository.findAll();
        System.out.println("junk");
        return accountRepository.findAll();
    }

    // Need to check user name and password
}
