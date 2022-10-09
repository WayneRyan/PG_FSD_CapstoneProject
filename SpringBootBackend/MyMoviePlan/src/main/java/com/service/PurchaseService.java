package com.service;

import com.bean.Purchase;
import com.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class PurchaseService {
    @Autowired
    PurchaseRepository purchaseRepository;

    public String createPurchase(Purchase purchase){
        purchaseRepository.save(purchase);
        return "Purchase created successfully";
    }

    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }
}
