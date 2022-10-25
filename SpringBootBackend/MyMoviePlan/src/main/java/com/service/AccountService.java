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
        if (!accountRepository.existsByUsername(account.getUsername())){
            accountRepository.save(account);
            return "Account created successfully";
        } else {
            return "Try a different user name";
        }
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public boolean checkCredentials(Account account) {
        System.out.println("Same account:" + account);
        return accountRepository.existsByPasswordAndUsername(account.getPassword(), account.getUsername());
    }

    public Account getByUsername(String username) {
        return Account.safeCopy(accountRepository.findAccountByUsername(username));
    }
}
