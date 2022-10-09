package com.service;

import com.bean.Account;
import com.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class AccountService {

    @Autowired
    AccountRepository accountRepository;

    public String createAccount(Account account) {
        // Need to test issues with account already exists.
        accountRepository.save(account);
        return "Account created successfully";
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public String checkCredentials(Account account) {
        // If there exists an account in the database with the same username and password
        // Set session data and
        return "You successfully logged in";
        // Otherwise clear session data and
        // return "Failure to login";
    }

    // Need to check user name and password
}
