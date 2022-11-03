package com.controller;

import com.bean.Purchase;
import com.dto.MovieShowTimes;
import com.dto.Ticket;
import com.service.PurchaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.processing.SupportedOptions;
import java.util.List;

@RestController
@RequestMapping("purchase")
@CrossOrigin()
public class PurchaseController {
    @Autowired
    PurchaseService purchaseService;

    @RequestMapping(value = "create", method = RequestMethod.OPTIONS)
    ResponseEntity<?> purchaseOptions(){
        return ResponseEntity.ok().allow(HttpMethod.POST).build();
    }

    @PostMapping(value = "create", consumes = MediaType.APPLICATION_JSON_VALUE)
    public String createPurchase(@RequestBody List<Purchase> purchase) {
        return purchaseService.createPurchase(purchase);
    }

    @GetMapping(value = "get-all", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Purchase> getAllPurchases() {
        return purchaseService.getAllPurchases();
    }

    @GetMapping(value = "get-by-user/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Ticket> getUserPurchases(@PathVariable("id") int id) {
        return purchaseService.getUserPurchases(id);
    }
}
