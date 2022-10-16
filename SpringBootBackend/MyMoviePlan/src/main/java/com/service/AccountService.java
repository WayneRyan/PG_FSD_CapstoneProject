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
        try {
            accountRepository.save(account);
            return "Account created successfully";
        }catch (Exception e) {
            return "There was an issue creating the account";
        }
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public boolean checkCredentials(Account account) {
        return accountRepository.existsByPasswordAndUsername(account.getPassword(), account.getUsername());
    }

    public Account getByUsername(String username){
        return accountRepository.findAccountByUsername(username);
    }

    // Need to check user name and password
}
