package com.controller;

import com.bean.Purchase;
import com.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("purchase")
@CrossOrigin(origins = "http://localhost:4200")
public class PurchaseController {
    @Autowired
    PurchaseService purchaseService;

    @PostMapping(value = "create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createPurchase(@RequestBody List<Purchase> purchase) {
        return purchaseService.createPurchase(purchase);
    }

    @GetMapping(value = "get-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Purchase> getAllPurchases() {
        return purchaseService.getAllPurchases();
    }

    @GetMapping(value = "get-by-user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Purchase> getUserPurchases(@PathVariable("id") int id) {
        return purchaseService.getUserPurchases(id);
    }
}
