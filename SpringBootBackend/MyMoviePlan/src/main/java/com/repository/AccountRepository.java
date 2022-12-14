package com.repository;

import com.bean.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {

    boolean existsByPasswordAndUsername(String password, String username);

    Account findAccountByUsername(String username);

    boolean existsByUsername(String username);
}
