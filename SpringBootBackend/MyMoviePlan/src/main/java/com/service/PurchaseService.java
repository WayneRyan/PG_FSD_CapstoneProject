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

    public String createPurchase(List<Purchase> purchases) {
        for (Purchase p : purchases) {
            purchaseRepository.save(p);
        }
        return "Purchase created successfully";
    }

    public List<Purchase> getAllPurchases() {
        return purchaseRepository.findAll();
    }

    public List<Purchase> getUserPurchases(int id) {
        return purchaseRepository.findAllByAccount_Id(id);
    }
}
